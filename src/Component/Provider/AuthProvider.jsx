import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../Firebase/firebase";
import 'react-toastify/dist/ReactToastify.css';
import { toast } from "react-toastify";


export const AuthContext = createContext(null); 
 
const AuthProvider = ({children}) => { 

  const googleProvider = new GoogleAuthProvider()
  const githubProvider = new GithubAuthProvider();

  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
    console.log(user)

      // create user
      const createUser = (email, password) => { 
        console.log(email, password)
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
      }

      //----- Log in -----
      const LogInUser = (email, password) => {
        setLoading(true)
        return  signInWithEmailAndPassword(auth, email, password)
      }  

      // ------- google login ------ 
      const googleLogin = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
      }

      //----github login -----
      const githubLogin = () => {
        setLoading(true)
        return signInWithPopup(auth, githubProvider)
      }
 

      //------ log out-----
      const logOutUser = () => {
        setUser(null) 
        setLoading(true)
        signOut(auth)
        .then(() => {
          toast.success("successfully logout!")
        }).catch((error) => {
          console.log(error)
        });
      }

      useEffect(() => {
        const unsubscribe =  onAuthStateChanged(auth, (user) => {
              if (user) {
                setUser(user) 
                setLoading(false)
              } 
            });
            return () => unsubscribe()
      },[])

      const values = {
        user,
        loading,
        createUser,   
        LogInUser, 
        logOutUser, 
        googleLogin,
        githubLogin,
    }  
    return (
        <AuthContext.Provider value={values}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
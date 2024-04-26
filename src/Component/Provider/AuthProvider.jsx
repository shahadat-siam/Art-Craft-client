import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../Firebase/firebase";
import 'react-toastify/dist/ReactToastify.css';
import { toast } from "react-toastify";


export const AuthContext = createContext(null); 
 
const AuthProvider = ({children}) => { 

  const [user, setUser] = useState(null)
    console.log(user)
     // create user
     const createUser = (email, password) => { 
      console.log(email, password)
        // setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
      }

     //----- Log in -----
     const LogInUser = (email, password) => {
        // setLoading(true)
        return  signInWithEmailAndPassword(auth, email, password)
      }  

      //------ log out-----
      const logOutUser = () => {
        setUser(null) 
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
              } 
            });
            return () => unsubscribe()
      },[])

      const values = {
        user,
        createUser,   
        LogInUser, 
        logOutUser, 
    }  
    return (
        <AuthContext.Provider value={values}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
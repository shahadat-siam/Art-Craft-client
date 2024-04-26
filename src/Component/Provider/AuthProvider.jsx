import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../Firebase/firebase";


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


      useEffect(() => {
        const unsubscribe =  onAuthStateChanged(auth, (user) => {
              if (user) {
                setUser(user) 
              } 
            });
            return () => unsubscribe()
      },[])

      const values = {
        createUser,   
        LogInUser,  
    }  
    return (
        <AuthContext.Provider value={values}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
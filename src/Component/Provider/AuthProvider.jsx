import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { createContext } from "react";
import { auth } from "../Firebase/firebase";


export const AuthContext = createContext(null);
 
const AuthProvider = ({children}) => { 
    
     // create user
     const createUser = (email, password) => { 
        // setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
      }

     //----- Log in -----
     const LogInUser = (email, password) => {
        // setLoading(true)
        return  signInWithEmailAndPassword(auth, email, password)
      }  


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
import React, { createContext, useEffect, useState } from "react";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import auth from "../../firebase/Firebase.config";

export const AppContext = createContext(null);

const ContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);

const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

const userSignIn =(email, password)=>{
    return signInWithEmailAndPassword(auth,email,password)
} 
const logout = ()=>{
    return signOut(auth)
} 

useEffect(()=>{
    const unSubscribe = onAuthStateChanged(auth,(currentUser)=>{
        setUser(currentUser);
        console.log( currentUser, 'current User')

    });
    return ()=>{
    unSubscribe();
    }
    
},[])

  const userInfo = { 
    user, 
    createUser, 
    userSignIn,
    logout 
};
  return <AppContext.Provider value={userInfo}>{children}</AppContext.Provider>;
};

export default ContextProvider;

import React, { createContext, useEffect, useState } from "react";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import auth from "../../firebase/Firebase.config";

export const AppContext = createContext(null);

const ContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true)

const createUser = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password);
  };

const userSignIn =(email, password)=>{
    setLoading(true)
    return signInWithEmailAndPassword(auth,email,password)
} 
const logout = ()=>{
    setLoading(true)
    return signOut(auth)
} 

useEffect(()=>{
    const unSubscribe = onAuthStateChanged(auth,(currentUser)=>{
        setUser(currentUser);
        console.log( currentUser, 'current User')
        setLoading(false)

    });
    return ()=>{
    unSubscribe();
    }
    
},[])

  const userInfo = { 
    user, 
    loading,
    createUser, 
    userSignIn,
    logout 
};
  return <AppContext.Provider value={userInfo}>{children}</AppContext.Provider>;
};

export default ContextProvider;

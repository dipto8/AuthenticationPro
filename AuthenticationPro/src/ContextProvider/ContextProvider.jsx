import React, { createContext, useEffect, useState } from "react";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
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

useEffect(()=>{
    onAuthStateChanged(auth,(currentUser)=>{
        setUser(currentUser);
        console.log( currentUser, 'curent User')

    }):
    const unscribe
},[])

  const userInfo = { user, createUser, userSignIn };
  return <AppContext.Provider value={userInfo}>{children}</AppContext.Provider>;
};

export default ContextProvider;

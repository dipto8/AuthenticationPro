import React, { createContext, useState } from "react";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
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

  const userInfo = { user, createUser, userSignIn };
  return <AppContext.Provider value={userInfo}>{children}</AppContext.Provider>;
};

export default ContextProvider;

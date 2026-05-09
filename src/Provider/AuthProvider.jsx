import  { createContext, useEffect, useState } from "react";
import app from "../Firebase/firebase.config";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";

export const AuthContext = createContext();
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);
  console.log(user)
  const createUser =(email,password)=>{
    return createUserWithEmailAndPassword(auth,email,password);
  }
  const signin=(email,password)=>{
    return signInWithEmailAndPassword(auth,email,password);
  }
  const logout=()=>{
    return signOut(auth);
  }
  useEffect(()=>{
   const unsubscribe = onAuthStateChanged(auth,(currentUser)=>{
        setUser(currentUser);
    })
    return ()=>{
        unsubscribe();
    };
  },[]);
  const authData ={
    user,
    setUser,
    createUser,
    logout,
    signin,
  }
  return <AuthContext value={authData}>{children}</AuthContext>;
};

export default AuthProvider;

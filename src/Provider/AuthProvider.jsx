import  { createContext, useEffect, useState } from "react";
import app from "../Firebase/firebase.config";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";

export const AuthContext = createContext();
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);
  const [loading,setLoading]=useState(true)
//   console.log(loading,user)

  const createUser =(email,password)=>{
    setLoading(true);
    return createUserWithEmailAndPassword(auth,email,password);
  }
  const signin=(email,password)=>{
    setLoading(true);
    return signInWithEmailAndPassword(auth,email,password);
  }
//   update user
const updateUser =(updatedData)=>{
    updateProfile(auth.currentUser, updatedData)

} 
 const logout=()=>{
    return signOut(auth);
  }
  useEffect(()=>{
   const unsubscribe = onAuthStateChanged(auth,(currentUser)=>{
        setUser(currentUser);
        setLoading(false);
    });
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
    loading,
    setLoading,
    updateUser,
  }
  return <AuthContext value={authData}>{children}</AuthContext>;
};

export default AuthProvider;

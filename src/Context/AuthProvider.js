import React, {  createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword} from 'firebase/auth';


export const AuthContext= createContext();
const auth = getAuth(app)

const AuthProvider = ({children}) => {

    const [user ,setUser]=useState(null);
    const [loading , setLoading]=useState(true);

    const createUser = (email,passowrd)=>{
        return createUserWithEmailAndPassword(auth,email,passowrd)
       
    }
    const userLogin=(email,passowrd)=>{
        return signInWithEmailAndPassword(auth,email,passowrd)
    }
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,currentUser=>{
            console.log(currentUser)
             setUser(currentUser)
            });
       return ()=>{
           return unsubscribe();
       }
},[])


    const authInfo = {user,loading,createUser,userLogin};
    return (
      <AuthContext.Provider value={authInfo}>
           {children}
      </AuthContext.Provider>
    );
};

export default AuthProvider;
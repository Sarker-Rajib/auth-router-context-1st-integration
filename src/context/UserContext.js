import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContext = createContext();

const auth = getAuth(app);

const UserContext = ({ children }) => {
   const [user, setUser] = useState({});
   const [loading, setLoading] = useState(true);

   const googleProvider = new GoogleAuthProvider();

   // create user
   const createUser = (email, password) => {
      return createUserWithEmailAndPassword(auth, email, password);
   }

   // sign input
   const signIn = (email, password) => {
      return signInWithEmailAndPassword(auth, email, password);
   }


   const logOut = () => {
      return signOut(auth);
   }


   const signInwithGoogle = () => {
      return signInWithPopup(auth, googleProvider)
   }



   // ? //
   useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, logUser => {
         setUser(logUser);
         setLoading(false);
      })

      return () => {
         unsubscribe();
      }
   }, [])

   const authInfo = { user, loading, createUser, signIn , logOut, signInwithGoogle};

   return (
      <AuthContext.Provider value={authInfo}>
         {children}
      </AuthContext.Provider>
   );
};

export default UserContext;
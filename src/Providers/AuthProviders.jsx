import { createUserWithEmailAndPassword } from "firebase/auth/cordova";
import React, { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../firebase.init";
import { GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";

export const AuthContext = createContext(null);

const googleProvider = new GoogleAuthProvider();

const AuthProviders = ({ children }) => {
    // use state 
    const [user,setuser ] = useState(null);
    const [loading ,setloading ] = useState(true);

  
  const createUser = (email, Password) => {
    setloading(true);

    return createUserWithEmailAndPassword(auth, email, Password);
  };

  const signInUser = (email, Password) => {
    setloading(true);
    return signInWithEmailAndPassword(auth, email, Password);
  };
  // auth Provider for google 
  const signInWithGoogle =()=>{
    return signInWithPopup(auth,googleProvider)
  }


  // signout in this site only we given auth one
  const signOutUser = ()=>{
    setloading(true);
    return signOut(auth);
  }





    //  onAuthStateChanged(auth,currentUser =>{
    //     if(currentUser){
    //         console.log('currently logged',currentUser);
    //         setuser(currentUser);
    //     }
    //     else{
    //         console.log('NO user here!!!');
    //         setuser(null);
    //     }
    //  })
    useEffect(()=>{
     const unsubscribe= onAuthStateChanged(auth,currentUser =>{
        console.log('CurrentUser',currentUser);
        setuser(currentUser);
        setloading(false);

      }) 
      return()=>{
        unsubscribe();
      }



    },[])

  
  const authInfo = {
    loading,
    createUser,
    signInUser,
    user,
    signOutUser,
    signInWithGoogle,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProviders;

/**
 * create context with null as defautl
 * create Provider
 * set a value with somethings (authInfo)
 * [attention Please !!!]
 * use the authProvdider in the main.jsx
 * access the children inside the authProvider in the main.jsx
 * exPort authcontext
 */

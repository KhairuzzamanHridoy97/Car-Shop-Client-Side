import { useEffect, useState } from "react";
import firebaseInitialize from "../pages/Login/Firebase/firebase.init";
import { getAuth, createUserWithEmailAndPassword,onAuthStateChanged,signInWithEmailAndPassword ,signOut} from "firebase/auth";



firebaseInitialize();
const useFirebase=()=>{
    const[user,setUser]= useState({});
    const auth = getAuth();

    const registerUser=(email,password)=>{
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
        });
    };

    //observe user state
    useEffect(()=>{
     const unsubscribe= onAuthStateChanged(auth, (user) => {
            if (user) {
              const uid = user.uid;
              setUser(user)
            } else {
              setUser({})
            }
          });
          return ()=>unsubscribe;
    },[]);

    // After Complete Re
    const loginUser=(email,password)=>{
      signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
    
    }

    //logout
    const logOut=()=>{
        signOut(auth).then(() => {
            // Sign-out successful.
          }).catch((error) => {
            // An error happened.
          });       
    };


    return{
        user,
        registerUser,
        logOut
    }

}

export default useFirebase;
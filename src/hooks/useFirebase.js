
import { useState, useEffect } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword,GoogleAuthProvider, onAuthStateChanged,signInWithPopup, updateProfile,signOut } from "firebase/auth";
import firebaseInitialize from '../pages/Login/Firebase/firebase.init';


// initialize firebase app
firebaseInitialize();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [authError, setAuthError] = useState('');

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const registerUser = (email, password,name,history) => {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setAuthError('');
                //send name to firebase after creation
                updateProfile(auth.currentUser, {
                    displayName:name
                  }).then(() => {
                   
                  }).catch((error) => {
                    
                  });
                  
                history.replace('/')
            })
            .catch((error) => {
                setAuthError(error.message);
                console.log(error);
            })
            .finally(() => setIsLoading(false));
    }

    const loginUser = (email, password, location, history) => {
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const destination = location?.state?.from || '/';
                history.replace(destination);
                setAuthError('');
            })
            .catch((error) => {
                setAuthError(error.message);
            })
            .finally(() => setIsLoading(false));
    }

    // observer user state
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser({})
            }
            setIsLoading(false);
        });
        return () => unsubscribed;
    }, []);

    const signInWithGoogle=(location,history)=>{
        setIsLoading(true);
        signInWithPopup(auth, googleProvider)
        .then((result) => {
            const user = result.user;
            setAuthError('');
        }).catch((error) => {
            // Handle Errors here.
            setAuthError(error.message)
        })
        .finally(() => setIsLoading(false));
    }

    const logOut = () => {
        setIsLoading(true);
        signOut(auth).then(() => {
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
        })
            .finally(() => setIsLoading(false));
    }

    return {
        user,
        isLoading,
        authError,
        registerUser,
        loginUser,
        signInWithGoogle,
        logOut,
    }
}

export default useFirebase;
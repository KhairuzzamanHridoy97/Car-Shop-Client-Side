
import { useState, useEffect } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword,GoogleAuthProvider, onAuthStateChanged,signInWithPopup, updateProfile,signOut } from "firebase/auth";
import firebaseInitialize from '../pages/Login/Firebase/firebase.init';


// initialize firebase app
firebaseInitialize();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [authError, setAuthError] = useState('');
    const [admin, setAdmin] = useState(false);

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const registerUser=(email,password,name,history)=>{
        setIsLoading(true)
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            setAuthError('')
            const newUser = {email,displayName:name}
            setUser(newUser)
            // save user to the database
            saveUser(email, name, 'POST');
            // send name to firebase after creation
            updateProfile(auth.currentUser, {
              displayName: name
            }).then(() => {
             
            }).catch((error) => {
              
            });
            
            history.replace('/');
        })
        .catch((error) => {
            const errorCode = error.code;
           setAuthError(error.message)
            // ..
        })
        .finally(()=>setIsLoading(false));
    };
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

    const signInWithGoogle=(location,history )=>{
        setIsLoading(true)
        signInWithPopup(auth, googleProvider)
        .then((result) => {       
          const user = result.user;
          saveUser(user.email, user.displayName, 'PUT');
          setAuthError('');
          const destination = location?.state?.from || '/';
          history.replace(destination);
        }).catch((error) => {
           setAuthError(error.message)
        })
        .finally(()=>setIsLoading(false));
      } ;

      useEffect(() => {
        fetch(`https://limitless-scrubland-11621.herokuapp.com/users/${user.email}`)
            .then(res => res.json())
            .then(data => setAdmin(data.admin))
    }, [user.email])

    const logOut = () => {
        setIsLoading(true);
        signOut(auth).then(() => {
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
        })
            .finally(() => setIsLoading(false));
    };

    const saveUser = (email, displayName,method) => {
        const user = { email, displayName };
        fetch('https://limitless-scrubland-11621.herokuapp.com/users', {
            method: method,
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then()
    }

    return {
        user,
        isLoading,
        authError,
        admin,
        registerUser,
        saveUser,
        loginUser,
        signInWithGoogle,
        logOut,
    }
}

export default useFirebase;
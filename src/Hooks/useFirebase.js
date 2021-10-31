import React from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged} from "firebase/auth";
import { useEffect, useState } from "react";
import InitializeAuthentication from "../Firebase/firebase.init";
InitializeAuthentication();
const googleProvider = new GoogleAuthProvider();

const useFirebase = () => {

    const auth = getAuth();

    const [user, setUser] = useState({});
    const [isLogin, setIsLogin] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState('');

    // toggle login
    const toggle = e => {
        setIsLogin(e.target.checked)
    }

    // Google signin
    const googleSignIn = () => {
        setIsLoading(true);
        signInWithPopup(auth, googleProvider)
            .then(result => {
                setUser(result.user)
            })
            .finally(() => setIsLoading(false))


    }

    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user)
            }
            else {
                setUser({})
            }
            setIsLoading(false)
        });
        return () => unsubscribed;
    }, []);

    const logOut = () => {
        setIsLoading(true)
        signOut(auth)
            .then(() => { })
            .finally(() => setIsLoading(false))
    }


    return {
        user,
        isLoading,
        logOut,
        googleSignIn,
        error,
        toggle, 
        isLogin
    };
};

export default useFirebase;
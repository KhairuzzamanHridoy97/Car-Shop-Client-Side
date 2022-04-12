import React, { createContext } from 'react';
import useFirebase from '../../hooks/useFirebase';

export const AuthContext = createContext()

const AuthProvider = () => {
    const allContext = useFirebase()
    return (
        <AuthContext.Provider value={allContext}>
            
        </AuthContext.Provider>
    );
};

export default AuthProvider;
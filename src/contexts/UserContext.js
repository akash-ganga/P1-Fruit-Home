import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import React, { createContext, useState } from 'react';
import app from '../firebase/firebase.init';

export const AuthContext = createContext();
const auth = getAuth(app);

const UserContext = ({children}) => {
    const [user, setUser] = useState(null);

    const createUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password);
    }
    
    const signInWEP = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password);
    }
    
    const authInfo = {user, createUser, signInWEP};

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;
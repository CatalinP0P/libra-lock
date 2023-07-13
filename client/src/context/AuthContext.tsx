import React, { useContext, createContext, useState, useEffect } from 'react';
import {
    GoogleAuthProvider,
    FacebookAuthProvider,
    signOut,
    signInWithPopup,
    UserCredential,
} from 'firebase/auth';
import firebase from '../lib/firebase';

interface AuthProps {
    user: firebase.User | null;
    loading: boolean;
    signWithGoogle: () => any;
    signOut: () => void;
}

const AuthContext = createContext<AuthProps>({
    user: null,
    loading: true,
    signWithGoogle: () => {},
    signOut: () => {},
});

export const useAuth = () => {
    return useContext(AuthContext);
};

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const [user, setUser] = useState<firebase.User | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        firebase.auth().onAuthStateChanged((user: firebase.User | null) => {
            setUser(user);
            setLoading(false);
        });
    }, []);

    const signWithGoogle = () => {
        const provider = new GoogleAuthProvider();

        firebase
            .auth()
            .signInWithPopup(provider)
            .then((UserCredential) => {
                window.location.href = window.location.origin;
            })
            .catch((err: any) => {
                console.log(err);
            });
    };

    return (
        <AuthContext.Provider
            value={{
                user: user,
                loading: loading,
                signWithGoogle: signWithGoogle,
                signOut: () =>
                    firebase
                        .auth()
                        .signOut()
                        .then(() => window.location.reload()),
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

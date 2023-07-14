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
    signWithFacebook: () => any;
    signWithApple: () => any;
    signWithEmail: (email: string, password: string) => any;
    createAccountWithEmail: (
        email: string,
        password: string,
        displayName: string
    ) => Promise<any>;
    signOut: () => void;
}

const AuthContext = createContext<AuthProps>({
    user: null,
    loading: true,
    signWithGoogle: () => {},
    signWithFacebook: () => {},
    signWithApple: () => {},
    signWithEmail: (email: string, password: string) => {},
    createAccountWithEmail: async (
        email: string,
        password: string,
        displayName: string
    ) => {},
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

    const signWithFacebook = () => {
        const provider = new FacebookAuthProvider();
        firebase
            .auth()
            .signInWithPopup(provider)
            .then(() => {
                window.location.href = window.location.origin;
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const signWithApple = () => {};

    const createAccountWithEmail = async (
        email: string,
        password: string,
        displayName: string
    ) => {
        const userCredentials = await firebase
            .auth()
            .createUserWithEmailAndPassword(email, password);

        const user = userCredentials.user;
        await user?.updateProfile({ displayName: displayName });
    };

    const signWithEmail = async (email: string, password: string) => {
        const userCredentials = await firebase
            .auth()
            .signInWithEmailAndPassword(email, password);
        return userCredentials;
    };

    return (
        <AuthContext.Provider
            value={{
                user: user,
                loading: loading,
                signWithGoogle: signWithGoogle,
                signWithFacebook: signWithFacebook,
                signWithApple: signWithApple,
                signWithEmail: signWithEmail,
                createAccountWithEmail: createAccountWithEmail,
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

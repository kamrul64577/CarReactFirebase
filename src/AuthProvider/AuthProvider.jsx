import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { app } from "../firebase/firebase.config";

export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)

    const createUser = (name, email, phoneNumber, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Once the user is created, update the display name
                return updateProfile(auth.currentUser, {
                    displayName: name,
                    phoneNumber: phoneNumber
                }).then(() => {
                    // Return the user credential
                    return userCredential;
                });
            })
            .catch((error) => {
                // Handle errors
                setLoading(false);
                throw error;
            });
    }

    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = () => {
        return signOut(auth).then(() => setUser(null))
    }


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            if (currentUser) {
                setUser(currentUser)
                setLoading(false);
                console.log(currentUser);
            } else {
                setLoading(false);
            }
        })
        return unsubscribe;
    }, [])

    const authInfo = { user, createUser, signIn, logOut }

    return <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
}

export default AuthProvider;
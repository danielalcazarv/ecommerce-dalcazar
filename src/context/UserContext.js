import { createContext, useContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, GoogleAuthProvider, signInWithPopup, sendPasswordResetEmail} from "firebase/auth";
import { auth } from "../api/firebase";

export const UserContext = createContext();
const {Provider} = UserContext;

export const useAuth = () => {
    const context = useContext(UserContext)
    if(!context) throw new Error('There is not auth provider')
    return context
}

export const CustomUserProvider = ({children}) =>{
    const [user, setUser] = useState(null);

    const signup = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    };
    const login = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    };
    const logout = () => signOut(auth);
    const googleLogin = () =>{
        const googleProvider = new GoogleAuthProvider()
        return signInWithPopup(auth, googleProvider)
    };
    const resetPassword = async (email) => sendPasswordResetEmail(auth, email);
    useEffect(()=>{
        onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser);
        })
    },[])

    return (
        <Provider value={{ signup, login, user, logout, googleLogin, resetPassword }}>
            {children}
        </Provider>
    )
}

export default UserContext;
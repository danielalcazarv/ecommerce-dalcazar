import { createContext, useContext, useState } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../api/firebase";

export const UserContext = createContext();
const {Provider} = UserContext;

export const useAuth = () => {
    const context = useContext(UserContext)
    if(!context) throw new Error('There is not auth provider')
    return context
}

export const CustomUserProvider = ({children}) =>{
    const [error, setError] = useState("");
    const [navigate, setNavigate] = useState(false);

    const signup = (email, password) =>{
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            setError("")
            setNavigate(true);
        }).catch((error) => {
            const errorCode = error.code;
            if (errorCode ==="auth/invalid-email"){
                setError("Email inválido.")
            }else if (errorCode==="auth/weak-password"){
                setError("Contraseña inválida, no puede ser menor a 6 caracteres.")
            }else if(errorCode==="auth/email-already-in-use"){
                setError("Email ya en uso.")
            }else{
                setError("Error desconocido.")
            }
            
        });
        
    };
    const login = (email, password) =>{
        signInWithEmailAndPassword(auth,email,password)
    }

    return (
        <Provider value={{ signup, login, error, navigate }}>
            {children}
        </Provider>
    )
}

export default UserContext;
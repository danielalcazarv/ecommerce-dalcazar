import { createContext , useState, useEffect } from "react";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "../api/firebase";
import Swal from "sweetalert2";

export const UserContext = createContext();

const {Provider} = UserContext;

export const CustomUserProvider = ({children}) =>{
    const [user, setUser] = useState({
        email:'',
        password:''
    })
    const [registerEmail, setRegisterEmail] = useState("")
    const [registerPassword, setRegisterPassword] = useState("")
    const [loginEmail, setLoginEmail] = useState("")
    const [loginPassword, setLoginPassword] = useState("")

    useEffect(()=>{
        onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser)
        })
    },[])

    const enterNewEmail = (event) =>{
        setRegisterEmail(event.target.value)
    }
    const enterNewPassword = (event) =>{
        setRegisterPassword(event.target.value)
    }
    const enterEmail = (event) =>{
        setLoginEmail(event.target.value)
    }
    const enterPassword = (event) =>{
        setLoginPassword(event.target.value)
    }
    const register = async () =>{
        try{
            const user = await createUserWithEmailAndPassword(auth,registerEmail,registerPassword)
        }catch(error){
            Swal.fire({
                icon: 'error',
                title: error.message,
            })
        }
    };
    const login = async () =>{
        try{
            const user = await signInWithEmailAndPassword(auth,loginEmail,loginPassword)
            console.log(user)
        }catch(error){
            Swal.fire({
                icon: 'error',
                title: error.message,
            })
        }
    };

    const logout = async () =>{
        await signOut(auth)
    };


    return (
        <Provider value={{enterNewEmail, enterNewPassword, enterEmail, enterPassword, register, login, logout, user}}>
            {children}
        </Provider>
    )
}

export default UserContext;
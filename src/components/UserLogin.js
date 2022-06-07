import { useState } from "react"
import { useAuth } from "../context/UserContext"
import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import UserAlert from "./UserAlert";

const UserLogin = () => {
    const [user, setUser] = useState ({
        email:"",
        password:"",
    })
    const {login, googleLogin} = useAuth()
    const [errorF, setErrorF] = useState("");
    const navigate = useNavigate()

    const handleChange = ({target: {name, value}}) =>{
        setUser({...user,[name]:value})
    }
    const handleSubmit = async (e) =>{
        e.preventDefault()
        setErrorF("")
        try{
            await login(user.email, user.password)
            navigate('/cart')
        }catch(error){
            const errorCode = error.code;
            switch (errorCode){
                case "auth/invalid-email": setErrorF("Email inválido.");
                break;
                case "auth/weak-password": setErrorF("Contraseña inválida, no puede ser menor a 6 caracteres.");
                break;
                case "auth/missing-email" : setErrorF("Ingresar un email válido");
                break;
                case "auth/internal-error" : setErrorF("Ingresar una contraseña válida");
                break;
                case "auth/user-not-found": setErrorF("Email y/o contraseña invalido/s");
                break;
                case "auth/wrong-password": setErrorF("Email y/o contraseña invalido/s");
                break;
                case "auth/popup-closed-by-user": setErrorF("");
                break;
                default : setErrorF(error.code);
            }
        }
    }
    const handleGoogleSignin = async () =>{
        try {
            await googleLogin();
            navigate('/cart');
        }catch(error){
            const errorCode = error.code;
            switch (errorCode){
                case "auth/popup-closed-by-user": setErrorF("");
                break;
                case "auth/user-cancelled": setErrorF("");
                break;
                default : setErrorF(error.code);
            }
        }
    }

    return (
        <div className="container mt-4">
            <h4>Iniciar Sesión</h4>
            <div className="container form-inicio-sesion">
                {errorF&&<UserAlert message={errorF}/>}
                <form className="mx-auto mb-4" onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Correo Electrónico</label>
                        <input onChange={handleChange} name="email" type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Contraseña</label>
                        <input onChange={handleChange} name="password" type="password" className="form-control" id="exampleInputPassword1"/>
                    </div>
                    <div className="text-center">
                        <button  type="submit" className="btn btn-outline-dark">Ingresar</button>
                    </div>
                </form>
                <div className="row">
                    <Link className="text-decoration-none col" to="/register">
                        <button className="btn btn-outline-dark">¿No tienes cuenta? Registrate Ahora</button>
                    </Link>
                    <button onClick={handleGoogleSignin} className="btn btn-outline-dark col"><FcGoogle/> Ingresar con Google</button>
                </div>
            </div>
        </div>
    )
}

export default UserLogin
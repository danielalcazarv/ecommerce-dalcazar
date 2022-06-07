import { useState } from "react"
import { useAuth } from "../context/UserContext"
import { useNavigate } from "react-router-dom"
import UserAlert from "./UserAlert";

const UserRegister = () => {
    const [newUser, setNewUser] = useState ({
        email:"",
        password:"",
    })
    const {signup} = useAuth()
    const [errorF, setErrorF] = useState("");
    const navigate = useNavigate()
    const handleChange = ({target: {name, value}}) =>{
        setNewUser({...newUser,[name]:value})
    }
    const handleSubmit = async (e) =>{
        e.preventDefault()
        setErrorF("")
        try{
            await signup(newUser.email, newUser.password)
            navigate('/register/data')
        }catch(error){
            const errorCode = error.code;
            switch (errorCode){
                case "auth/invalid-email": setErrorF("Email inválido.");
                break;
                case "auth/weak-password": setErrorF("Contraseña inválida, no puede ser menor a 6 caracteres.");
                break;
                case "auth/email-already-in-use": setErrorF("Email ya en uso.");
                break;
                case "auth/missing-email" : setErrorF("Ingresar un email válido");
                break;
                case "auth/internal-error" : setErrorF("Ingresar una contraseña válida");
                break;
                default : setErrorF(error.code);
            }
        }
    }

    return (
        <div className="container mt-4">
            <h4>Registro</h4>
            <div className="container form-inicio-sesion">
                {errorF&&<UserAlert message={errorF}/>}
                <form className="row g-3 mx-auto mb-4" onSubmit={handleSubmit}>
                <div className="col-md-6">
                        <label htmlFor="inputEmail4" className="form-label">Correo Electrónico</label>
                        <input onChange={handleChange} name="email" type="text"  placeholder="ejemplo@email.com" className="form-control" id="inputEmail4"/>
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="inputPassword4" className="form-label">Contraseña</label>
                        <input onChange={handleChange} name="password" type="password" className="form-control" id="inputPassword4"/>
                    </div>
                    <div className="col-12">
                        <button type="submit" className="btn btn-outline-dark-2">Registrarse</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default UserRegister
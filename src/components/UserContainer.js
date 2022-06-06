import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import UserLogged from "./UserLogged"


const UserContainer = () => {
    const {enterNewEmail, enterNewPassword, enterEmail, enterPassword, register, login, logout,user} = useContext(UserContext)

    const handleMailLogin = () =>{
        login()
        console.log(user)
    }
    return (
        <div className="container">
            <h4>INICIAR SESIÓN</h4>
            <div className="container">
            <form className="form-inicio-sesion mx-auto mb-4">
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Correo Electrónico</label>
                    <input onChange={enterEmail} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Contraseña</label>
                    <input onChange={enterPassword} type="password" className="form-control" id="exampleInputPassword1"/>
                </div>
                <div className="text-center">
                    <button onClick={handleMailLogin} type="submit" className="btn btn-success">Ingresar</button>
                </div>
            </form>
            </div>
            <h5 className="text-center">¿No tienes cuenta? Registrarse Ahora</h5>
        </div>
    )
}

export default UserContainer
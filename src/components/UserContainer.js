import { useAuth } from "../context/UserContext"
import { Link } from "react-router-dom";

const UserContainer = () => {
    const { user } = useAuth()
    return (
        <div className="container mt-4">
            <h4>Iniciar Sesión</h4>
            <div className="container">
                <form className="form-inicio-sesion mx-auto mb-4">
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Correo Electrónico</label>
                        <input  type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Contraseña</label>
                        <input  type="password" className="form-control" id="exampleInputPassword1"/>
                    </div>
                    <div className="text-center">
                        <button  type="submit" className="btn btn-success">Ingresar</button>
                    </div>
                </form>
            </div>
            <Link className="text-decoration-none link-dark" to="/registrarusuario">
                <h5 className="text-center">¿No tienes cuenta? Registrate Ahora</h5>
            </Link>
        </div>
    )
}

export default UserContainer
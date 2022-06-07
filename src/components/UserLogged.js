import { useAuth } from "../context/UserContext";

const UserLogged = () => {
    const {user} = useAuth()

    return (
        <div>
            <div className="container mt-4">
                <h4>¡Hola {user.displayName || user.email}!</h4>
            </div>
            <div className="container mt-3">
                <h5>Tus Datos</h5>
            </div>
        </div>
    )
}

export default UserLogged
import { useAuth } from "../context/UserContext";

const UserLogged = () => {
    const {user} = useAuth()

    return (
        <div className="container mt-4">
            <h4>¡Hola {user.displayName || user.email}!</h4>
        </div>
    )
}

export default UserLogged
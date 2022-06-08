import { Link } from "react-router-dom";
import { useAuth } from "../context/UserContext";

const UserWidget = () => {
    const {user} = useAuth();
    return (
        !user ?
        (<Link to="/login">
            <span className="material-icons" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Mi Cuenta">
                person
            </span>
        </Link>) :
        (<Link to="/micuenta">
            <span className="material-icons" data-bs-toggle="tooltip" data-bs-placement="bottom" title={user.displayName || user.email}>
                person
            </span>
        </Link>)
    )
}

export default UserWidget
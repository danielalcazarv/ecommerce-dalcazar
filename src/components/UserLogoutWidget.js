import { Link } from "react-router-dom";
import { useAuth } from "../context/UserContext";

const UserLogoutWidget = () => {
    const {user, logout} = useAuth();
    const handleLogout = async () =>{
        try{
            await logout();
        }catch(error){
            console.log(error);
        }
    }
    return (
        !user ?
        (<p></p>):
        (<Link to="/" onClick={handleLogout}>
            <span className="material-icons" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Cerrar Sesión">
                logout
            </span>
        </Link>)
    )
}

export default UserLogoutWidget
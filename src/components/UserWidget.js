import { Link } from "react-router-dom";

const UserWidget = () => {
    return (
        <Link to="/user" className="position-relative">
            <span className="material-icons" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Mi Cuenta">
                person
            </span>
        </Link>
    )
}

export default UserWidget
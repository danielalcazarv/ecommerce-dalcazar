import { Link } from "react-router-dom";

const AccountWidget = () => {
    return (
        <Link to="/account" className="position-relative">
            <span className="material-icons" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Mi Cuenta">
                person
            </span>
        </Link>
    )
}

export default AccountWidget
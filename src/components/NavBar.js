import { Link, NavLink} from "react-router-dom";
import { Button } from "bootstrap";
import logo from "../img/wheelie.png";
import CartWidget from "./CartWidget";
import UserWidget from "./UserWidget";
import UserLogoutWidget from "./UserLogoutWidget";

const NavBar = () => {
    return (
            <header className="header">
                <nav className="navbar navbar-expand-lg navbar-light nav__custom">
                    <div className="container-fluid">
                        <Link className="navbar-brand" to="/">
                            <div className="container fluid">
                                <img className="d-inline col-2" src={logo} alt="wheelie-logo"/>
                                <h3 className="d-inline col-2 px-3">Wheelie Bikes</h3>
                            </div>
                        </Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ms-auto mt-2 mt-lg-0">
                                <li className="nav-item">
                                    <NavLink className="nav-link" aria-current="page" to="/categoria/bicicletas">Bicicletas</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/categoria/componentes">Componentes</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/categoria/accesorios">Accesorios</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/categoria/indumentaria">Indumentaria</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/categoria/ofertas">OFERTAS</NavLink>
                                </li>
                            </ul>
                            <CartWidget/>
                            <UserWidget/>
                            <UserLogoutWidget/>
                        </div>
                    </div>
                </nav>
            </header>
        )
};

export default NavBar;
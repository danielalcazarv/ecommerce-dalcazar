import logo from "../img/wheelie.png"
import CartWidget from "./CartWidget";
import { Link, NavLink} from "react-router-dom";

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
                                <NavLink className="nav-link" aria-current="page" to="/bicicletas">Bicicletas</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/componentes">Componentes</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="accesorios">Accesorios</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="indumentaria">Indumentaria</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="ofertas">OFERTAS</NavLink>
                            </li>
                        </ul>
                        <form className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Buscar" aria-label="Search"/>
                            <button className="btn btn-outline-success" type="submit">Ir</button>
                        </form>
                        </div>
                        <div className="container nav__cart m-2 p-0">
                            <Link to="/cart">
                                <CartWidget/>
                            </Link>
                        </div>
                    </div>
                </nav>
            </header>
        )
};

export default NavBar;
import logo from "../img/wheelie.png"
import { Button } from "bootstrap";
import CartWidget from "./CartWidget";

const NavBar = () => {
    return (
            <header className="header">
                <nav className="navbar navbar-expand-lg navbar-light nav__custom">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="../public/index.html">
                            <div className="container fluid">
                                <img className="d-inline col-2" src={logo} alt="wheelie-logo"/>
                                <h3 className="d-inline col-2 px-3">Wheelie Bikes</h3>
                            </div>
                        </a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mt-2 mt-lg-0">
                            <li className="nav-item">
                                <a className="nav-link" aria-current="page" href="#">Bicicletas</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Componentes</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Accesorios</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Indumentaria</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">OFERTAS</a>
                            </li>
                        </ul>
                        <form className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Buscar" aria-label="Search"/>
                            <button className="btn btn-outline-success" type="submit">Ir</button>
                        </form>
                        </div>
                        <div className="container nav__cart m-2 p-0">
                            <CartWidget/>
                        </div>
                    </div>
                </nav>
            </header>
        )
};

export default NavBar;
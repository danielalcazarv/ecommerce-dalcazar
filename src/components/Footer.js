import { Link } from "react-router-dom";

const  Footer = () =>{
    return (
    <footer className="w-100 pt-4 flex-shrink-0 nav__custom">
        <div className="container">
            <div className="row gy-4">
                <div className="col-lg-4 col-md-6">
                    <h5 className="mb-3" id="footer__style">MENÚ</h5>
                    <ul className="list-unstyled">
                        <li><Link className="footer__link" to="/">Inicio</Link></li>
                        <li><Link className="footer__link" to="/categoria/bicicletas">Bicicletas</Link></li>
                        <li><Link className="footer__link" to="/categoria/accesorios">Accesorios</Link></li>
                        <li><Link className="footer__link" to="/categoria/indumentaria">Indumentaria</Link></li>
                        <li><Link className="footer__link" to="/categoria/ofertas">OFERTAS</Link></li>
                    </ul>
                </div>
            </div>
            <div className="container py-4">
                <p className="text text-center mb-0" id="footer__style">© Daniel Alcázar 2022 Todos los Derechos Reservados</p>
            </div>
        </div>
    </footer>
        )
};

export default Footer;
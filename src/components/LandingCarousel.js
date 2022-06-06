import {Link} from "react-router-dom"

const LandingCarousel = () => {
    return (
        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src="https://www.polygonbikes.com/wp-content/uploads/2020/08/Web-Banner-Bend-R-Fix-PRO.jpg" className="d-block w-100" alt="banner-1"/>
                </div>
                <div className="carousel-item">
                    <img src="https://www.polygonbikes.com/wp-content/uploads/2021/04/bromo_wistia_vid_poster_min7.jpg" className="d-block w-100" alt="banner-2"/>
                    <div className="carousel-caption d-none d-md-block">
                        <h5>Recién Llegada!</h5>
                        <Link to={`/item/OydDqJTLR3qrRRDlkbdD`}><button className="btn btn-success">Conocer Más</button></Link>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src="https://www.polygonbikes.com/wp-content/uploads/2021/09/Strattos-BA-2.jpg" className="d-block w-100" alt="banner-3"/>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    )
}

export default LandingCarousel
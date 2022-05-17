import {Link} from "react-router-dom"

const Items = ({producto}) => {
    return (
        <article className="card item__card m-2 col-3 text-center">
            <img src={producto.img} className="card-img-top card__img-box" alt={producto.titulo}/>
            <div className="card-body">
                <h5 className="card-title">{producto.titulo}</h5>
                <h6 className="card-text">{producto.marca}</h6>
                <p className="card-text">{producto.detalle}</p>
                <p className="card-text">Precio: USD ${producto.precio}</p>
                <Link to={`/item/${producto.id}`}><button className="btn btn-success">Ver Más</button></Link>
            </div>
        </article>
    )
}

export default Items
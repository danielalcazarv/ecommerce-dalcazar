import ItemCount from "./ItemCount"

const ItemDetail = ({productos}) => {
    const onAdd = ()=>{}
    return (
        <article>
            <div className="card mb-3 border-0">
                <div className="row g-0">
                    <div className="col-md-6">
                    <img src={productos.img} className="img-fluid rounded-start" alt={productos.titulo}/>
                    </div>
                    <div className="col-md-6 border">
                        <div className="card-body">
                            <h5 className="card-title text-center">{productos.titulo}</h5>
                            <p className="card-text text-center">Precio: USD ${productos.precio}</p>
                            <p className="card-text text-center">Color: {productos.color}</p>
                            <p className="card-text text-center">Tamaño: {productos.size}</p>
                            <ItemCount stock={5} init={1} onAdd={onAdd}/>
                            <p className="card-text">{productos.detallexl}</p>
                        </div>
                    </div>
                </div>
            </div>
        </article>
    )
}

export default ItemDetail
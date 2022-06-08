import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import ItemCount from "./ItemCount";
import { CartContext } from "../context/CartContext";

const ItemDetail = ({productos}) => {
    const [cartItems , setCartItems] = useState(0);
    const {addItem} = useContext(CartContext);
    
    const onAdd = (quantityToAdd)=>{
        setCartItems(quantityToAdd);
        addItem(productos, quantityToAdd);
    };

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
                            <div className="container count__custom">
                                <ItemCount stock={productos.stock} init={1} onAdd={onAdd}/>
                                {cartItems > 0 ? <Link className="text-center" to="/cart"><button className="btn btn-success m-2 item__button">Finalizar Compra</button></Link> 
                                    : <></>}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container border-top my-3">
                    <h6 className="mt-2">Descripción del Producto</h6>
                    <p>{productos.detallexl}</p>
                </div>
            </div>
        </article>
    )
}

export default ItemDetail
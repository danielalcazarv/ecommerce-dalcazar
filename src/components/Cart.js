import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import CartList from "./CartList";
import Swal from "sweetalert2"

const Cart = () => {
    const { cart, addItem, removeItem, clearItem, cantidadTotal, precioTotal } = useContext(CartContext)

    const limpiar = () =>{
        clearItem()
        Swal.fire({
            icon: 'warning',
            title: 'Su Carrito esta vacio',
            showConfirmButton: false,
            timer: 1200
        })
    }

    return (
        <div className="container">
            <h4>Mi Carrito</h4>
            <div className="container row justify-content-center align-items-center">
                {cantidadTotal==0 ?
                    <>
                    <p className="text-center">Su carrito esta vacío.</p> 
                    <Link className="col-auto" to="/">
                        <button className="btn btn-success m-2">Seguir comprando</button>
                    </Link>
                    </>:
                    <>
                        <CartList cart={cart} cantidadTotal={cantidadTotal} precioTotal={precioTotal} addItem={addItem} removeItem={removeItem}/>
                        <div className="d-flex flex-wrap py-2">
                            <button onClick={limpiar} className="btn btn-success m-2">Limpiar Carrito</button>
                            <button className="btn btn-success m-2">Confirmar Compra</button>
                        </div>
                    </>
                }
            </div>
        </div>
    )
}

export default Cart
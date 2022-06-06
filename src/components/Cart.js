import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import { db } from "../api/firebase"
import { collection, addDoc } from "firebase/firestore"
import CartList from "./CartList";
import Swal from "sweetalert2";

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
    const guardarCompra = () =>{
        const ventasCollection = collection(db,"ventas")
        const desgloseItems = (arr) =>{
            const filtroKeys = arr.map(({item:{id,titulo,precio},quantity}) => ({item:{id,titulo,precio},quantity}));
            return filtroKeys;
        }
        const venta = {
            buyer : {
                name : "Pedro Perez",
                phone : "5555-5555",
                email : "test@test.com"
            },
            items :desgloseItems(cart),
            date : new Date(),
            total : precioTotal
        }
        const consulta = addDoc(ventasCollection,venta)
        consulta
        .then((resultado) => {
            Swal.fire({
                icon: 'success',
                title: 'Compra exitosa! CODIGO DE COMPRA: '+resultado.id,
            });
            clearItem();
        })
        .catch((error) => {
            Swal.fire({
                icon: 'error',
                title: 'Hubo un error en su compra por favor comuníquese con la tienda',
            })
        })
    }
    return (
        <div className="container mt-4">
            <h4>Mi Carrito</h4>
            <div className="container row justify-content-center align-items-center">
                {cantidadTotal === 0 ?
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
                            <button onClick={guardarCompra} className="btn btn-success m-2">Confirmar Compra</button>
                        </div>
                    </>
                }
            </div>
        </div>
    )
}

export default Cart
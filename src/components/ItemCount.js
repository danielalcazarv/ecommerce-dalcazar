import { useState } from "react"
import Swal from "sweetalert2"

const ItemCount = ( {init,stock,onAdd} ) => {
    const [contador, setContador] = useState(init)
    const sumar = () => {
        contador<stock ? setContador(contador+1):
            Swal.fire({
                icon: 'warning',
                title: 'Cantidad Máxima Seleccionada',
                showConfirmButton: false,
                timer: 1200
            })
    }
    const restar = () => {
        contador<2 ?
            Swal.fire({
                icon: 'error',
                title: 'Cantidad mínima 1 unidad',
                showConfirmButton: false,
                timer: 1200
            }):
            setContador(contador-1)
    }
    const confirmar = () =>{
        onAdd(contador)
        Swal.fire({
            icon: 'success',
            title: 'Agregaste '+contador+' unidad/es',
        })
    }
    return (
    <>
        <div className="d-flex flex-wrap justify-content-evenly py-2">
        <button onClick={restar} className="btn btn-success p-0 mx-2">
            <span className="material-icons">
                remove
            </span>
        </button>
        <p className="mx-5">{contador}</p>
        <button onClick={sumar} className="btn btn-success p-0 mx-2">
            <span className="material-icons">
                add
            </span>
        </button>
        </div>
        <button onClick={confirmar} className="btn btn-success m-2 item__button">Agregar al Carrito</button>
    </>
    )
}

export default ItemCount
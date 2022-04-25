import { useState } from "react"
import Swal from "sweetalert2"

const ItemCount = ( {init,stock,onAdd} ) => {
    const [contador, setContador] = useState(init)
    const sumar = () => {
        if(contador<stock){
            setContador(contador+1)
        }else{
            Swal.fire({
                icon: 'warning',
                title: 'Cantidad Máxima Seleccionada',
                showConfirmButton: false,
                timer: 1200
            })
        }
    }
    const restar = () => {
        if (contador<2){
            Swal.fire({
                icon: 'error',
                title: 'Cantidad mínima 1 unidad',
                showConfirmButton: false,
                timer: 1200
            })
        }else{
            setContador(contador-1)
        }
    }
    const confirmar = () =>{
        console.log(contador)
        onAdd(contador)
        Swal.fire({
            icon: 'success',
            title: 'Agregaste '+contador+' unidad/es',
        })
    }
    return (
    <div className="container count__custom mx-auto">
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
        <button onClick={confirmar} className="btn btn-success m-2">Agregar al Carrito</button>
    </div>
    )
}

export default ItemCount
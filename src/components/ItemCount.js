import { useState } from "react"
import Swal from "sweetalert2"

const ItemCount = ( {init,stock,onAdd} ) => {
    const [contador, setContador] = useState(init)
    const sumar = () => {
        if(contador<stock){
            setContador(contador+1)
        }else{
            Swal.fire(
                'Cantidad Máxima',
                'Has seleccionado la cantidad máxima disponible',
                'warning'
            )
        }
    }
    const restar = () => {
        if (contador<1){
            Swal.fire(
                'Debes Agregar Unidades',
                'No has agregado unidades para comprar',
                'error'
            )
        }else{
            setContador(contador-1)
        }
    }
    const confirmar = () =>{
        console.log(contador)
        onAdd(contador)
    }
    return (
    <div className="container count__custom mx-auto">
        <p>Unidades seleccionadas: {contador}</p>
        <button onClick={restar} className="btn btn-success p-0">
            <span className="material-icons">
                remove
            </span>
        </button>
        <button onClick={confirmar} className="btn btn-success">Agregar al Carrito</button>
        <button onClick={sumar} className="btn btn-success p-0">
            <span className="material-icons">
                add
            </span>
        </button>
    </div>
    )
}

export default ItemCount
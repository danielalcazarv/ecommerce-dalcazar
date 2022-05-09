import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ItemDetail from "./ItemDetail"
import productosIniciales from "../api/productos.json"

const ItemDetailContainer = () => {
    const [cargando, setCargando] = useState(true)
    const [productos, setProductos] = useState({})
    const {id} = useParams()

    useEffect(()=>{
        const pedido = new Promise ((res)=>{
            setTimeout(() => {
                res(productosIniciales)
            }, 500);
        })
        pedido
        .then((res)=>{
            const resultado = res.filter((producto)=>{
                return producto.id == id
            })[0]
            setProductos(resultado)
            setCargando(false)
        })
    })

    return (
        cargando ? 
            (<div className="container">
                <div className="container text-center">
                    <p>Cargando detalle de producto...</p>
                    <div className="spinner-border text-success" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
            </div>):
            (<div className="container">
                <section className="container">
                    <ItemDetail productos={productos}/>
                </section>
            </div>)
    )
}

export default ItemDetailContainer
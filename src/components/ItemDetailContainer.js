import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ItemDetail from "./ItemDetail"
import { db } from "../api/firebase"
import { collection, getDocs } from "firebase/firestore"

const ItemDetailContainer = () => {
    const [cargando, setCargando] = useState(true)
    const [productos, setProductos] = useState({})
    const {id} = useParams()

    useEffect(()=>{
        const productosCollection = collection(db,"productos")
        const consulta = getDocs(productosCollection)
        consulta
        .then((resultado)=>{
            const productos =  resultado.docs.map(doc=>{
                const productosConId = {
                    ...doc.data(),
                    id: doc.id
                }
                return productosConId
            })
            const productoDetail = productos.filter((productos)=>{
                return productos.id==id
            })[0]
            setProductos(productoDetail)
            setCargando(false)
        })
        .catch((error)=>{
        })
        .finally(()=>{
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
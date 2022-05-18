import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ItemList from "./ItemList"
import { db } from "../api/firebase"
import { collection, getDocs } from "firebase/firestore"

const ItemListContainer = ({greeting}) => {
    const [cargando, setCargando] = useState(true)
    const [productos, setProductos] = useState([])
    const {categoriaId} = useParams()

    useEffect(()=>{
        const productosCollection = collection(db,"productos")
        const consulta = getDocs(productosCollection)
        if(categoriaId===undefined){
            consulta
            .then((resultado)=>{
                const productos =  resultado.docs.map(doc=>{
                    const productosConId = {
                        ...doc.data(),
                        id: doc.id
                    }
                    return productosConId
                })
                setProductos(productos)
                setCargando(false)
            })
            .catch((error)=>{
            })
            .finally(()=>{
            })
        }else if (categoriaId=="ofertas"){
            consulta
            .then((resultado)=>{
                const productos =  resultado.docs.map(doc=>{
                    const productosConId = {
                        ...doc.data(),
                        id: doc.id
                    }
                    return productosConId
                })
                setProductos(productos.filter(x=>x.oferta===true))
                setCargando(false)
            })
            .catch((error)=>{
            })
            .finally(()=>{
            })
        }else{
            consulta
            .then((resultado)=>{
                const productos =  resultado.docs.map(doc=>{
                    const productosConId = {
                        ...doc.data(),
                        id: doc.id
                    }
                    return productosConId
                })
                setProductos(productos.filter(x=>x.categoria==categoriaId))
                setCargando(false)
            })
            .catch((error)=>{
            })
            .finally(()=>{
            })
        }
    }, 
    [categoriaId])
    
    return(
        cargando ? 
            (<>
                <p className="text-center text__highlight">
                    {greeting}
                </p>
                <div className="container text-center">
                    <p>Cargando productos...</p>
                    <div className="spinner-border text-success" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
            </>):
            (<>
                <p className="text-center text__highlight">
                    {greeting}
                </p>
                <div className="container">
                    <ItemList productos={productos}/>
                </div>
            </>)
    )
}

export default ItemListContainer
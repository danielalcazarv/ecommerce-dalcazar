import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ItemList from "./ItemList"
import productosIniciales from "../api/productos.json"


const ItemListContainer = ({greeting}) => {
    const [cargando, setCargando] = useState(true)
    const [productos, setProductos] = useState([])
    const {categoriaId} = useParams()

    useEffect(()=>{
        if(categoriaId===undefined){
            const pedido = new Promise ((res)=>{
                setTimeout(() => {
                    res(productosIniciales)
                }, 500);
            })
            pedido
            .then((res)=>{
                setCargando(false)
                setProductos(res)
            })
        }else if (categoriaId=="ofertas"){
            const pedido = new Promise ((res)=>{
                setTimeout(() => {
                    res(productosIniciales.filter(x=>x.oferta===true))
                }, 500);
            })
            pedido
            .then((res)=>{
                setCargando(false)
                setProductos(res)
            })
        }else{
            const pedido = new Promise ((res)=>{
                setTimeout(() => {
                    res(productosIniciales.filter(x=>x.categoria==categoriaId))
                }, 500);
            })
            pedido
            .then((res)=>{
                setCargando(false)
                setProductos(res)
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
import { useEffect, useState } from "react"
import ItemList from "./ItemList"

const productosIniciales = [
    {
        id:1,
        titulo:"SISKIU N9",
        marca:"POLYGON",
        detalle:"Diseñada para andar en las condiciones más exigentes.",
        precio:3399,
        img:"https://www.polygonbikes.com/wp-content/uploads/2020/05/MY21-SISKIU-N9-CHAMELEON-FIX-SPEC-2.png"
    },
    {
        id:2,
        titulo:"BROMO N7",
        marca:"POLYGON",
        detalle:"Una e-bike full suspension, construida con tecnología IFS.",
        precio:4599,
        img:"https://www.polygonbikes.com/wp-content/uploads/2021/03/MY21-MT-BROMO-N7-P-1.png"
    },
    {
        id:3,
        titulo:"BROMO N8",
        marca:"POLYGON",
        detalle:"Una e-bike full suspension, construida con tecnología IFS para llevarta mas allá!",
        precio:6199,
        img:"https://www.polygonbikes.com/wp-content/uploads/2021/03/MY21-MT-BROMO-N8-P-1.png"
    }
]

const ItemListContainer = ({greeting}) => {
    const [cargando, setCargando] = useState(true)
    const [productos, setProductos] = useState([])

    useEffect(()=>{
        const pedido = new Promise ((res)=>{
            setTimeout(() => {
                res(productosIniciales)
            }, 2000);
        })
        pedido
        .then(()=>{
            console.log("Vamos bien!")
            setCargando(false)
            setProductos(productosIniciales)
        })
    }, 
    [])
    
    if (cargando){
        return(
            <div className="item__list--container">
            <p className="container text-center">
            {greeting}
            </p>
            <div className="container text-center">
                <p>Cargando productos...</p>
                <div className="spinner-border text-success" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
            </div>
        )
    }else{
        return (
            <div className="item__list--container">
            <p className="container text-center">
            {greeting}
            </p>
            <div className="container text-center">
                <ItemList productos={productos}/>
            </div>
            </div>
        )
    }

}

export default ItemListContainer
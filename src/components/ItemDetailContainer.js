import { useEffect, useState } from "react"
import ItemDetail from "./ItemDetail"

const productosIniciales = [
    {
        id:1,
        titulo:"SISKIU N9",
        marca:"POLYGON",
        detalle:"Diseñada para andar en las condiciones más exigentes.",
        detallexl:"Polygon Siskiu serie N es una bicicleta para enduro de aluminio con full suspensión. Posee una combinación de partes y tecnología diseñada para ser manejada, en las condiciones más demandantes. Una bicicleta agresiva, rápida, para un ciclista, que busca vencer sus limitaciones personales.",
        precio:3399,
        color:"CHAMELEON",
        size:`27.5" M`,
        img:"https://www.polygonbikes.com/wp-content/uploads/2020/05/MY21-SISKIU-N9-CHAMELEON-FIX-SPEC-2.png"
    },
    {
        id:2,
        titulo:"SISKIU T7",
        marca:"POLYGON",
        detalle:"Lista para el camino, una máquina eficiente para viajes épicos!",
        detallexl:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis optio harum pariatur aut, quidem asperiores iure aliquid doloribus omnis expedita eos quibusdam at dolorem molestiae ducimus commodi molestias, ullam ipsa.",
        precio:2149,
        color:"BLUE GREEN",
        size:`27.5" M`,
        img:"https://www.polygonbikes.com/wp-content/uploads/2020/08/MY20-SISKIU-T7-TA2-2.png"
    },
    {
        id:3,
        titulo:"BROMO N8",
        marca:"POLYGON",
        detalle:"Una e-bike full suspension, construida con tecnología IFS para llevarta mas allá!",
        detallexl:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis optio harum pariatur aut, quidem asperiores iure aliquid doloribus omnis expedita eos quibusdam at dolorem molestiae ducimus commodi molestias, ullam ipsa.",
        precio:6199,
        color:"WHITE BLACK",
        size:`29" L`,
        img:"https://www.polygonbikes.com/wp-content/uploads/2021/03/MY21-MT-BROMO-N8-P-1.png"
    }
]

const ItemDetailContainer = () => {
    const [cargando, setCargando] = useState(true)
    const [productos, setProductos] = useState({})

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
                    <ItemDetail productos={productos[0]}/>
                </section>
            </div>)
    )
}

export default ItemDetailContainer
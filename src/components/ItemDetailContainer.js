import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ItemDetail from "./ItemDetail"

const productosIniciales = [
    {
        id:1,
        titulo:"SISKIU N9",
        marca:"POLYGON",
        categoria:"BICICLETAS",
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
        categoria:"BICICLETAS",
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
        categoria:"BICICLETAS",
        detalle:"Una e-bike full suspension, construida con tecnología IFS para llevarta mas allá!",
        detallexl:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis optio harum pariatur aut, quidem asperiores iure aliquid doloribus omnis expedita eos quibusdam at dolorem molestiae ducimus commodi molestias, ullam ipsa.",
        precio:6199,
        color:"WHITE BLACK",
        size:`29" L`,
        img:"https://www.polygonbikes.com/wp-content/uploads/2021/03/MY21-MT-BROMO-N8-P-1.png"
    },
    {
        id:4,
        titulo:"SUPER AIR SPHERICAL",
        marca:"BELL",
        categoria:"ACCESORIOS",
        detalle:"Un casco con ventilación optimizada, liviano, tecnología Spherical y MIPS.",
        detallexl:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis optio harum pariatur aut, quidem asperiores iure aliquid doloribus omnis expedita eos quibusdam at dolorem molestiae ducimus commodi molestias, ullam ipsa.",
        precio:259,
        color:"FASTHOUSE MATTE RED/BLACK",
        size:`L`,
        img:"https://www.bellhelmets.com/dw/image/v2/BDBJ_PRD/on/demandware.static/-/Sites-bell-master-catalog/default/dwbadc97f6/images/large/bell-super-air-spherical-mountain-bike-helmet-fasthouse-matte-red-black-right.jpg"
    },
    {
        id:5,
        titulo:"SUPER DH SPHERICAL",
        marca:"BELL",
        categoria:"ACCESORIOS",
        detalle:"Casco full-face con tecnología Spherical y MIPS, el más vendido de Bell.",
        detallexl:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis optio harum pariatur aut, quidem asperiores iure aliquid doloribus omnis expedita eos quibusdam at dolorem molestiae ducimus commodi molestias, ullam ipsa.",
        precio:350,
        color:"MATTE/GLOSS BLUE/HI-VIZ",
        size:`M`,
        img:"https://www.bellhelmets.com/dw/image/v2/BDBJ_PRD/on/demandware.static/-/Sites-bell-master-catalog/default/dw15aaafe9/images/large/bell-super-dh-spherical-mountain-bike-helmet-fasthouse-matte-gloss-blue-hi-viz-right.jpg"
    },
    {
        id:6,
        titulo:"CAMISA BELL + DIXXON",
        marca:"BELL",
        categoria:"INDUMENTARIA",
        detalle:"Camisa de trabajo de alta calidad y liviana.",
        detallexl:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis optio harum pariatur aut, quidem asperiores iure aliquid doloribus omnis expedita eos quibusdam at dolorem molestiae ducimus commodi molestias, ullam ipsa.",
        precio:90,
        color:"NEGRO",
        size:`L`,
        img:"https://www.bellhelmets.com/dw/image/v2/BDBJ_PRD/on/demandware.static/-/Sites-bell-master-catalog/default/dw4103eb8f/images/large/bell-helmets-apparel-dixxon-mens-short-sleeve-workshirt-black-front.jpg"
    },
    {
        id:7,
        titulo:"ROMPEVIENTO BELL",
        marca:"BELL",
        categoria:"INDUMENTARIA",
        detalle:"Rompeviento con capucha liviano, listo para soportar las condiciones adversas.",
        detallexl:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis optio harum pariatur aut, quidem asperiores iure aliquid doloribus omnis expedita eos quibusdam at dolorem molestiae ducimus commodi molestias, ullam ipsa.",
        precio:125,
        color:"NEGRO CAMUFLADO",
        size:`L`,
        img:"https://www.bellhelmets.com/dw/image/v2/BDBJ_PRD/on/demandware.static/-/Sites-bell-master-catalog/default/dw5785f89b/images/large/bell-hooded-windbreaker-apparel-core-black-camo-front.jpg"
    },
    {
        id:8,
        titulo:"CAMBIO XTR RD-M9100-GS 12 VELOCIDADES",
        marca:"SHIMANO",
        categoria:"COMPONENTES",
        detalle:"Pata de cambios, caja mediana de 12 velocidades.",
        detallexl:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis optio harum pariatur aut, quidem asperiores iure aliquid doloribus omnis expedita eos quibusdam at dolorem molestiae ducimus commodi molestias, ullam ipsa.",
        precio:302,
        color:"NEGRO",
        size:``,
        img:"https://dassets.shimano.com/content/dam/global/cg1SHICCycling/final/products/cg2SHICComponent/cg3SHICRearDerailleur/cg4SHICRearDerailleur/P-RD-M9100-GS_BC19Nd0167.jpg/jcr:content/renditions/P-RD-M9100-GS_BC19Nd0167_750_750.jpeg"
    },
    {
        id:9,
        titulo:"PEDALES DEORE XT PD-M8040",
        marca:"SHIMANO",
        categoria:"COMPONENTES",
        detalle:"Pedales de plataforma de mayor agarre y comodidad en recorridos largos.",
        detallexl:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis optio harum pariatur aut, quidem asperiores iure aliquid doloribus omnis expedita eos quibusdam at dolorem molestiae ducimus commodi molestias, ullam ipsa.",
        precio:110,
        color:"NEGRO",
        size:`SM`,
        img:"https://dassets.shimano.com/content/dam/global/cg1SHICCycling/final/products/cg2SHICComponent/cg3SHICPedal/cg4SHICPedalSPD/P-PD-M8040_17114_1.jpg/jcr:content/renditions/P-PD-M8040_17114_1_750_750.jpeg"
    }
]

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
        .then(()=>{
            const resultado = productosIniciales.filter((producto)=>{
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
import { useEffect, useState } from "react";
import { db } from "../api/firebase";
import { collection, getDocs } from "firebase/firestore";
import LandingCarousel from "./LandingCarousel";
import ItemList from "./ItemList";

const Landing = () => {
    const [productos, setProductos] = useState([]);
    useEffect(()=>{
        const productosCollection = collection(db,"productos");
        const consulta = getDocs(productosCollection);
        consulta
        .then((resultado)=>{
            const productos =  resultado.docs.map(doc=>{
                const productosConId = {
                    ...doc.data(),
                    id: doc.id
                }
                return productosConId
            })
            setProductos(productos.filter(x=>x.destacado===true))
        })
        .catch((error)=>{
        })
        .finally(()=>{
        })}, 
        []);
    
    return (
        <>
        <LandingCarousel/>
        <div className="gy-5 mt-5">
            <h4 className="landing-destacados__title">NEW ARRIVALS</h4>
            <h5 className="landing-destacados__sub">Estos son nuestros podructos recién llegados</h5>
        </div>
        <div className="container">
            <ItemList productos={productos}/>
        </div>
        </>
    )
}

export default Landing
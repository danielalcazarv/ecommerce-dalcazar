import { useEffect, useState } from "react";
import { useAuth } from "../context/UserContext";
import { Link } from "react-router-dom";
import { db } from "../api/firebase";
import { collection, getDocs } from "firebase/firestore";
import UserBuyHistory from "./UserBuyHistory";

const UserLogged = () => {
    const {user} = useAuth();
    const [cargando, setCargando] = useState(true);
    const [ventas, setVentas] = useState({});

    useEffect(()=>{
        const ventasCollection = collection(db,"ventas");
        const consulta = getDocs(ventasCollection);
        consulta
        .then((resultado)=>{
            const ventas =  resultado.docs.map(doc=>{
                const ventasConId = {
                    ...doc.data(),
                    id: doc.id
                };
                return ventasConId
            });
            setVentas(ventas.filter(x=>x.buyer.uid===user.uid));
            setCargando(false);
        })
        .catch((error)=>{
            console.log(error);
        })
        .finally(()=>{
        })}, 
        [])

    return (
        <div>
            <div className="container mt-4">
                <h4>¡Hola {user.displayName || user.email}!</h4>
            </div>
            <div className="container mt-3">
                <h5>Tus Datos</h5>
                <Link to='/register/data'>
                    <button className="btn btn-outline-dark-2">Modificar Datos</button>
                </Link>
            </div>
            <div className="container mt-4">
                <h5>Tus Pedidos</h5>
            </div>
            <div className="container mt-3">
            {cargando?
                (<>
                    <p>Tu historial de compras esta vacío.</p> 
                    <Link className="w-100" to="/">
                        <button className="btn btn-success mx-auto">Seguir comprando</button>
                    </Link>
                </>):
                (<>
                    <UserBuyHistory ventas={ventas}/>
                </>)}
            </div>
        </div>
    )
}

export default UserLogged
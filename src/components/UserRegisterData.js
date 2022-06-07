import { useState } from "react"
import { useAuth } from "../context/UserContext"
import { useNavigate } from "react-router-dom"
import { db } from "../api/firebase"
import { collection, addDoc } from "firebase/firestore"
import UserAlert from "./UserAlert";
import Swal from "sweetalert2";

const UserRegisterData = () => {
    const [newUser, setNewUser] = useState ({
        nombre:"",
        apellido:"",
        direccion:"",
        provincia:"",
        telefono:"",
    })
    const {user} = useAuth()
    const [errorF, setErrorF] = useState("");
    const navigate = useNavigate()
    const handleChange = ({target: {name, value}}) =>{
        setNewUser({...newUser,[name]:value})
    }
    const handleSubmit = (e) =>{
        e.preventDefault()
        const usersCollection = collection(db, "usuarios")
        const usuario ={
            nombre:newUser.nombre,
            apellido:newUser.apellido,
            direccion:newUser.direccion,
            provincia:newUser.provincia,
            telefono:newUser.telefono,
            idauth: user.uid
        }
        const consulta = addDoc(usersCollection,usuario)
        consulta
        .then((resultado) => {
            console.log(resultado.id)
            Swal.fire({
                icon: 'success',
                title:'Has finalizado tu registro de forma exitosa!',
            });
            navigate('/cart')
        })
        .catch((error) => {
            setErrorF(error.code)
        })
    }

    return (
        <div className="container mt-4">
        <h4>Datos de Usuario</h4>
        <div className="container form-inicio-sesion">
            {errorF&&<UserAlert message={errorF}/>}
            <form className="row g-3 mx-auto mb-4" onSubmit={handleSubmit}>
                <div className="col-md-6">
                    <label htmlFor="nombre" className="form-label">Nombre/s</label>
                    <input onChange={handleChange} name="nombre" type="text" className="form-control" placeholder="Nombre/s" aria-label="First name" id="nombre"/>
                </div>
                <div className="col-md-6">
                    <label htmlFor="apellido" className="form-label">Apellido/s</label>
                    <input onChange={handleChange} name="apellido" type="text" className="form-control" placeholder="Apellido/s" aria-label="Last name" id="apellido"/>
                </div>
                <div className="col-12">
                    <label htmlFor="inputAddress" className="form-label">Dirección</label>
                    <input onChange={handleChange} name="direccion" type="text" className="form-control" id="inputAddress" placeholder="Calle, altura, timbre y depto."/>
                </div>
                <div className="col-md-6">
                    <label htmlFor="inputCity" className="form-label">Provincia</label>
                    <input onChange={handleChange} name="provincia" type="text" className="form-control" id="inputCity"/>
                </div>
                <div className="col-md-6">
                    <label htmlFor="inputZip" className="form-label">Teléfono/Celular</label>
                    <input onChange={handleChange} name="telefono" type="number" className="form-control" id="inputZip"/>
                </div>
                <div className="col-12">
                    <button type="submit" className="btn btn-outline-dark-2">Terminar Registro</button>
                </div>
            </form>
        </div>
    </div>
    )
}

export default UserRegisterData
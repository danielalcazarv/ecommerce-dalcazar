import { useState, useContext } from "react"
import { useAuth } from "../context/UserContext"
import { useNavigate } from "react-router-dom"

const UserRegister = () => {

    const [user, setUser] = useState ({
        email:"",
        password:"",
    })
    const {signup, error, navigate} = useAuth()
    const navigateTo = useNavigate()

    const handleChange = ({target: {name, value}}) =>{
        setUser({...user,[name]:value})
        }
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        signup(user.email, user.password);
        navigate && navigateTo('/cart')
    }
/*
    const handleSubmit = async (e) =>{
        e.preventDefault()
        setErrorF("")
        try{
            await signup(user.email, user.password)
            navigate('/')
            //cantidadTotal === 0 ? navigate('/') : navigate(-1)
        }catch(error){
            setErrorF(error.message)
        }
    }*/


    return (
        <div className="container mt-4">
            <h4>Registro</h4>
            <div className="container">
                {error&&<p className="mx-auto text-center form-inicio-sesion text-danger">{error}</p>}
                <form className="row g-3 form-inicio-sesion mx-auto mb-4" onSubmit={handleSubmit}>
                    {/*<div className="col-md-6">
                        <label htmlFor="nombre" className="form-label">Nombre</label>
                        <input type="text" className="form-control" placeholder="Nombre/s" aria-label="First name" id="nombre"/>
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="apellido" className="form-label">Apellidos</label>
                        <input type="text" className="form-control" placeholder="Apellido/s" aria-label="Last name" id="apellido"/>
    </div>*/}       
                    <div className="col-md-6">
                        <label htmlFor="inputEmail4" className="form-label">Correo Electrónico</label>
                        <input onChange={handleChange} name="email" type="text" className="form-control" id="inputEmail4"/>
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="inputPassword4" className="form-label">Contraseña</label>
                        <input onChange={handleChange} name="password" type="password" className="form-control" id="inputPassword4"/>
                    </div>
                    {/*<div className="col-12">
                        <label htmlFor="inputAddress" className="form-label">Dirección</label>
                        <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St"/>
                    </div>
                    <div className="col-12">
                        <label htmlFor="inputAddress2" className="form-label">Dirección 2</label>
                        <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor"/>
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="inputCity" className="form-label">Provincia</label>
                        <input type="text" className="form-control" id="inputCity"/>
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="inputZip" className="form-label">Código Postal</label>
                        <input type="text" className="form-control" id="inputZip"/>
</div>*/}
                    <div className="col-12">
                        <button type="submit" className="btn btn-success">Registrarse</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default UserRegister
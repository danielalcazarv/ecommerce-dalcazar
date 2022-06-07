import { useAuth } from "../context/UserContext"
import { Navigate } from "react-router-dom"

export const ProtectedRoute = ({children}) => {
    const {user} = useAuth()

    if (!user) return <Navigate to='/'/>

    return <>{children}</>
}


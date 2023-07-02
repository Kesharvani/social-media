import { Navigate, useLocation } from "react-router-dom";

import {useAuth} from "../../context/AuthContext"

export const RequireAuth=({children})=>{
    const {isLoggedIn}=useAuth()
    const location = useLocation();
    return (
        isLoggedIn?children:<Navigate to="/" state={{ from: location }}></Navigate>
    )
}
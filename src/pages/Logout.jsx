import { useEffect } from "react"
import {Navigate} from "react-router-dom"
export const Logout = () =>{
    useEffect(()=>{
        logoutUser();
    },[logoutUser])

    return <Navigate to= "/login"/>
}
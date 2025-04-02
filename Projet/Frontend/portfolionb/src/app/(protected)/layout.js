"use client"
import { useSelector } from "react-redux"
import { redirect } from "next/navigation"

const ProtectedLayout = ({children}) =>{
    const token = useSelector((state)=> state.auth.token);
    return(
        token ? children :redirect('/login')
    )
}
export default ProtectedLayout
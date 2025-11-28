import { useEffect, useState } from "react"
import { getUserProfile } from "../service/userService"

export const User=()=>{

    const[users,setUsers]=useState([])

    useEffect(()=>{
        
    })


    const getProfile=()=>{
    const token=localStorage.getItem('token')
    console.log(token)
    getUserProfile().then(res=>{
    setUsers(res)
    console.log(res)
     console.log(res)
   })
    }

    useEffect(()=>{
        getProfile()
    })

    return(<>
    
    </>)
}
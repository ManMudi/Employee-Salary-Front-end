import { useEffect, useState } from "react"
import { getUserProfile } from "../service/userService"

export const User=()=>{

    const[users,setUsers]=useState([])

    useEffect(()=>{
        getProfile()
    })

    const getProfile=()=>{

    getUserProfile().then(res=>{
    setUsers(res)
    console.log(res.token)
     console.log(res.token)
   })
    }

   
    return(<>
    
    </>)
}
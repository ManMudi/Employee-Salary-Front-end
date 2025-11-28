import { useState } from "react"
import { register } from "../service/authService"

export const Register=()=>{

    const[name,setName]=useState('')
    const[username,setUsername]=useState('')
    const[email,setEmail]=useState('')
    const[password,setPassword]=useState('')

    const handleSave=()=>{
        const myData={name,username,email,password}
        console.log(myData)
        register(myData).then(res=>console.log(res))
    }

    return(
        <>
        <br/>
        <div className="div">
         <input 
         placeholder="Name"
         value={name}
         onChange={(e)=>setName(e.target.value)}
         className="input"
         type="text"
         required
         />

         <input 
         placeholder="Username"
         value={username}
         onChange={(e)=>setUsername(e.target.value)}
         className="input"
         type="text"
         required
         />
         <br/>
        <input 
         placeholder="Email"
         value={email}
         onChange={(e)=>setEmail(e.target.value)}
         className="input"
         type="text"
         required
         />

        <input 
         placeholder="Password"
         value={password}
         onChange={(e)=>setPassword(e.target.value)}
         className="input"
         type="password"
         required
         />
         <br/>
         <button onClick={handleSave}>Register</button>
        </div>
        </>
    )
}
import { useState } from "react"
import { login } from "../service/authService"

export const Login=()=>{

const[usernameOrEmail,setUsernameOrEmail]=useState('')
const[password,setPassword]=useState('')

const handleSave=()=>{
    const myData={usernameOrEmail,password}
  //   console.log(myData)
    login(myData).then(res=>{
     console.log(res)
     const token=res.token;
     localStorage.setItem('token',token)
    })
}

    return(<>
    <br/>
    <div className="div">
     <input
      placeholder="Enter Username Or Email"
      type="text"
      value={usernameOrEmail}
      onChange={(e)=>setUsernameOrEmail(e.target.value)}
      className="input"
     />

      <input
      placeholder="Enter Password"
      type="text"
      value={password}
      onChange={(e)=>setPassword(e.target.value)}
      className="input"
     />
     <button onClick={handleSave}>Login</button>
    </div>
    </>)
}
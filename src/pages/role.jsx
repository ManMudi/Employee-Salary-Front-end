import { useState } from "react"
import { addRole } from "../service/roleService"

export const Role=()=>{

    const[name,setName]=useState('')
    
    const handleSave=()=>{
        const myRole={name}
        console.log(myRole)
        addRole(myRole)
    }

    return(
        <>
        <br/>
        <div className="div">
       <br/>
       <label>Role Name</label>
       <input
        type="text"
        className="input"
        value={name}
        onChange={(e)=>setName(e.target.value)}
        placeholder="enter Role Name"
       />
       <button onClick={handleSave}>Save</button>
       </div>
       <br/>
       <div className="div1">

       </div>
        </>
    
       
    )
}

const API_BASE_URL="http://localhost:8080/roles"

export const addRole=(role)=>fetch(API_BASE_URL,{
    method:"POST",
    headers:{
         "Content-Type":'application/json'
    },
    body:JSON.stringify(role)
}).then(res=>res.json()).catch(error=>console.error(error))
    



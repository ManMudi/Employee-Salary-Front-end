const API_BASE_URL="http://localhost:8080/auth"

export const register=(register)=>fetch(API_BASE_URL+"/register",{
    method:"POST",
    headers:{
        'Content-Type':'application/json'
    },
    body:JSON.stringify(register)
}).then(res=>res.text()).catch(error=>console.error(error))

export const login=(login)=>fetch(API_BASE_URL+'/login',{
    method:'POST',
    headers:{
        'Content-Type':'application/json'
    },
    body:JSON.stringify(login)
}).then(res=>res.json())
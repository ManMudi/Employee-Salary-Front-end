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

export const savedLoginUser=(username,role)=>{
    sessionStorage.setItem("authenticatedUser",username)
    sessionStorage.setItem('role',role)
}

export const isUserLoggedIn=()=>{
    const username=sessionStorage.getItem('authenticatedUser')
    if(username==null){
        return false
    }else{
        return true
    }
}

export const isUserAdmin=()=>{
    const role=sessionStorage.getItem('role')
        if(role==='ROLE_ADMIN'){
            return true
        }else{
            return false
        }
    
}

export const logout=()=>{
    sessionStorage.clear()
    localStorage.clear()
}

export const loggedInUser=()=>{
    const  username=sessionStorage.getItem('authenticatedUser')
    return username
}

export const storeToken=(token)=>{
    localStorage.setItem('token',token)
}

export const getToken=()=>{
    localStorage.getItem('token')
}
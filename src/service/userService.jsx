const API_BASE_URL='http://localhost:8080/users';

export const getUserProfile=(token)=>fetch(API_BASE_URL+'/profile',{
    method:'GET',
    headers:{
     'Authorizations':token
    }
}).then(res=>res.text()).catch(error=>console.error(error))

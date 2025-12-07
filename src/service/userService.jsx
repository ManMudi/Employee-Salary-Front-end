
import { getToken } from './authService';
const API_BASE_URL='http://localhost:8080/users';


export const getUserProfile=()=>fetch(API_BASE_URL+'/profile',{
    method:'GET',
    headers:{
        'Authorization':getToken()
    }
 
}).then(res=>res.text()).catch(error=>console.error(error))

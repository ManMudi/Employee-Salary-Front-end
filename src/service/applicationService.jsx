const API_BASE_URL="http://localhost:8080/applications"

export const getAllApplication=()=>fetch(API_BASE_URL,{
    method:'GET'
}).then(res=>res.json()).catch(error=>console.error(error))
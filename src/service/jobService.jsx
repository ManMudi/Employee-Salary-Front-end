const API_BASE_URL="http://localhost:8080/jobs"

export const addJob=(job)=>fetch(API_BASE_URL,{
    method:'POST',
    headers:{
        'Content-Type':'application/json'
    },
    body:JSON.stringify(job)
}).then(res=>res.json()).catch(error=>console.error(error))

export const getAllJobs=(token)=>fetch(API_BASE_URL,{
    method:'GET',
    headers:{
        'Authorization':'Bearer '+token
    }
}).then(res=>res.json()).catch(error=>console.error(error))
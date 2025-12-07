import { useEffect, useState } from "react"
import { addJob, getAllJobs } from "../service/jobService"

export const Job=()=>{

    const[tittle,setTittle]=useState('')
    const[department,setDepartment]=useState('')
    const[salary,setSalary]=useState()
    const[jobs,setJobs]=useState([])
    const[location,setLocation]=useState('')

    const handleSave=()=>{
        const myData={tittle,department,salary,location}
        console.log(myData)
        addJob(myData).then(res=>console.log(res))
    }

    const loadJobs=()=>{
        
        getAllJobs().then(res=>{
            setJobs(res)
        })
    }

    useEffect(()=>{
       loadJobs()
    },[])

    return(<>
    <br/>
    <div className="div">
     <input
     type="text"
     className="input"
     value={tittle}
     onChange={(e)=>setTittle(e.target.value)}
     placeholder="Enter Tittle"
     required
     />

     <input
     type="text"
     className="input"
     value={department}
     onChange={(e)=>setDepartment(e.target.value)}
     placeholder="Enter Department"
     required
     />

    <input
     type="text"
     className="input"
     value={salary}
     onChange={(e)=>setSalary(e.target.value)}
     placeholder="Enter Salary"
     required
     />

     <input
     type="text"
     className="input"
     value={location}
     onChange={(e)=>setLocation(e.target.value)}
     placeholder="Enter Location"
     required
     />

     <button onClick={handleSave}>Save</button>
    </div>
    <div className="div">
    <table className="table">
   <thead>
      <th className="th">#</th>
     <th className="th">Tittle</th>
     <th className="th">Department</th>
     <th className="th">Salary</th>
       <th className="th">Location</th>
   </thead>
     <tbody>
        {
        jobs.map((job,key)=>
        <tr key={key}>
            <td className="td">{key+1}</td>
            <td className="td">{job.tittle}</td>
            <td className="td">{job.department}</td>
           <td className="td">{job.salary}</td>
           <td className="td">{job.location}</td>
        </tr>)
     }
     </tbody>
     </table>
    </div>
    </>)
}
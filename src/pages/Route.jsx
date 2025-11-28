import { useEffect, useState } from "react";

export const Route=({children,path})=>{

    const[currentPath,setCurrentPath]=useState(window.location.pathname)

    useEffect(()=>{
        const popHandler=()=> setCurrentPath(window.location.pathname)

        window.addEventListener("popState",popHandler)
        return window.removeEventListener("popState",popHandler)
    },[])

    return currentPath === path ? children : null;
}
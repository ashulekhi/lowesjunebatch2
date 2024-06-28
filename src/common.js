import { useEffect, useState } from "react"

export function Authentication(){

}

export function useAdmin(){ 
    var [isAdmin,setIsAdmin]  = useState()

    useEffect(()=>{
    // api to check user role

    // .then(zpIsAdmin(true)})

    },[])
return isAdmin
}

var isAdmin = useAdmin()



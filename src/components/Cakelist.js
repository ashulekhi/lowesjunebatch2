import { useEffect, useState } from "react"
import Cake from "./Cake"
import axios from "axios"
import Loader from "./Loader"

export default function Cakelist() {
    var [cakes,setCakes] = useState()
    useEffect(function(){
        axios({
            url:process.env.REACT_APP_APIURL+"/allcakes",
            method:"get"
        }).then(function(response){
            console.log("response from all cakes api" , response.data)
            setCakes(response.data.data)
        })
    },[])
  

    function removeCake(name) {
        alert(name)
    }

    if(cakes){
        return (
            <div className="row m-2">
                {cakes.map(function (each,index) {
                    return <Cake key={index} removeCake={removeCake} data={each} />
                })}
            </div>
        )
    }
    else{
        return (
            <Loader />
        )
    }

    
}
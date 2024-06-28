import { useEffect, useState } from "react"
import Cake from "./Cake"
import axios from "axios"
import Loader from "./Loader"
import { useDispatch, useSelector } from "react-redux"
import {getCakesThunkCreator } from "../reduxstore/thunks"

export default function Cakelist() {
    var cakes = useSelector(state=>state.cartReducer.cakes)
    var dispatch = useDispatch()

    useEffect(function(){
        if(!cakes){
            dispatch(getCakesThunkCreator())
        }
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
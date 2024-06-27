import axios from "axios"
import { useEffect, useState } from "react"
import { useSearchParams } from "react-router-dom"
import Cake from "./Cake"

export default function Search() {
   
    var [query, setQuery] = useSearchParams()
    var [results, setResults] = useState()
    var text = query.get("q")

    useEffect(function (){
        axios({
            url: process.env.REACT_APP_APIURL+"/searchcakes?q=" + text,
            method: "get"
        }).then(function (response) {
            setResults(response.data.data)
        })
    },[text])
    return (
        <div>
            <h1>Search RESULTS for {text}</h1>
            <div className="row">

                {
                    results?.map(function (each, index) {
                        return (
                            <Cake data={each} key={index} />
                        )
                    })
                }

            </div>

        </div>
    )
}
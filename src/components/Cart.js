import { useParams } from "react-router-dom"

export default function Cart(){
    var params = useParams()
    console.log("params" , params["*"].split("/"))
    return (
        <div>
            <h1>Cart Component</h1>
        </div>
    )
}
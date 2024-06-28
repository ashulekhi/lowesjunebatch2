import axios from "axios"
import store from "../reduxstore/store"

export default function CheckoutSummary(){

    function placeOrder(){
        var state = store.getState()
        var cakes = state.cartReducer.cartitems
        var price = state.cartReducer.price
        var userdetails = state.AuthReducer.userdetails
        var requestJSON = {
            cakes,
            price,
            ...userdetails
        }
        axios({
            url: process.env.REACT_APP_APIURL+"/addcakeorder",
            method:"post",
            data:requestJSON
        }).then((response)=>{
            console.log("Response from add place order api" , response.data)
        })
    }
    return (
        <div>
            <h1>
                Checkout Summary component

                <button onClick={placeOrder} className="btn btn-primary">Confirm Order</button>
            </h1>
        </div>
    )
}
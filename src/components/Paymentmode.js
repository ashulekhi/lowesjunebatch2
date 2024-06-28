import store from "../reduxstore/store"

export default function Paymentmode(){
    var state = store.getState()
    console.log("state" , state)
    return (
        <div>
            <h1>
                Payment component
            </h1>
        </div>
    )
}
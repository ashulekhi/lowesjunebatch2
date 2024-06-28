import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"

export default function AddAddress(){
    var dispatch = useDispatch()
    var navigate = useNavigate()
    var userdetails = {
        
    }
    function handleDetails(e){
      userdetails[e.target.name] = e.target.value
    }

    function addAddress(){
        console.log("userdetails" , userdetails)
        debugger
        dispatch({
            type:"ADD_USERDETAILS",
            payload:userdetails
        })
        navigate("/checkout/paymentmode")
    }
    return (
        <div  className="col-6">
           <div>
            <label>Name</label>
            <input onChange={handleDetails} className="form-control" name="name" />
           </div>
           <div>
            <label>Address</label>
            <input onChange={handleDetails} className="form-control" name="address" />
           </div>
           <div>
            <label>City</label>
            <input onChange={handleDetails} className="form-control" name="city" />
           </div>
           <div>
            <label>Pincode</label>
            <input onChange={handleDetails} className="form-control" name="pincode" />
           </div>
           <div>
            <label>Phone</label>
            <input onChange={handleDetails} className="form-control" name="phone" />
           </div>
           <div>
            <button className="btn btn-primary" onClick={addAddress}>Add Address</button>
           </div>
        </div>
    )
}
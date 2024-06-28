import { Link, Outlet } from "react-router-dom";

export default function Checkout(){
    return (
        <div className="container">
            <div className="row">
                <div className="col-4">

                    <div> <Link to="/checkout/addaddress">Add Address</Link></div>
                    <div> <Link to="/checkout/paymentmode">Payment Mode</Link></div>
                    <div> <Link to="/checkout/checkoutsummary">Checkout Summary</Link></div>
                 

                </div>
                <div className="col-8">

                    <Outlet />
                </div>
            </div>

        </div>
    )
}
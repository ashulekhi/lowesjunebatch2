import { Outlet } from "react-router-dom";

export default function Checkout(){
    return (
        <div className="container">
            <div className="row">
                <div className="col-4">

                    <div>Add Address</div>
                    <div>Payment Mode</div>
                    <div>Checkout Summary</div>

                </div>
                <div className="col-8">

                    <Outlet />
                </div>
            </div>

        </div>
    )
}
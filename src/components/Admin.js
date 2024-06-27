import { Link, Outlet } from "react-router-dom";


export default function Admin(){

    return (
        <>
        <h1>Admin Panel</h1>
        <div className="row">
            <div className="col-4">
                <div>
                    <Link to="/admin/allusers">All Users</Link>
                </div>
                <div>
                    <Link to="/admin/adduser">Add User</Link>
                </div>
            </div>
            <div className="col-8">
                <Outlet />
            </div>
               
        </div>
        </>
       
    )
}
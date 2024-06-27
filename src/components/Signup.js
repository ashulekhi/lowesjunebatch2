import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Signup() {
    var [error, setError] = useState()
    var [message, setMessage] = useState()
    var user = {}

    function handleEmail(e) {
        user.email = e.target.value
    }
    function handleName(e) {
        user.name = e.target.value
    }
    function handlePassword(e) {
        user.password = e.target.value
    }


    function createAccount() {
        // make an api call 
        // axios({url:"",data:JSON , method:"post"})
        //.then(function(response){},function(){error})
        if (user.email && user.name && user.password) {
            axios({
                url: "http://16.16.162.133/api/register",
                method: "post",
                data: user
            }).then(function (response) {
                console.log("response from api is ", response.data)
                if (response.data.message == "User Registered") {
                    setMessage("Kindly Check your Inbox for account Activation!!")
                }
                else {
                    setError("Email is Already taken!")
                }
            }, function (error) {
                console.log("Error from signup api", error)
                setError("Some Error Occured")
            })
        }
        else {
            setError("Please Provide Details")
        }

    }
    return (
        <section class="vh-100" style={{ "background-color": "rgb(255,235,239)" }}>
            <div class="container py-5 h-100">
                <div class="row d-flex justify-content-center align-items-center h-100">
                    <div class="col col-xl-10">
                        <div class="card" style={{ "border-radius": "1rem" }}>
                            <div class="row g-0">
                                <div class="col-md-6 col-lg-5 d-none d-md-block">
                                    <img src="cakshop.jpeg"
                                        alt="login form" class="h-100 img-fluid" style={{ "border-radius": "1rem 0 0 1rem" }} />
                                </div>
                                <div class="col-md-6 col-lg-7 d-flex align-items-center">
                                    <div class="card-body p-4 p-lg-5 text-black">

                                        <form>
                                            <h5 class="fw-normal mb-3 pb-3" style={{ "letter-spacing": "1px" }}>Create An Account</h5>
                                            <div>
                                                {error && <div className="alert alert-danger">{error}</div>}
                                                {message && <div className="alert alert-success">{message}</div>}
                                            </div>
                                            <div data-mdb-input-init class="form-outline mb-4">
                                                <input onChange={handleEmail} type="email" id="form2Example17" class="form-control form-control-lg" />
                                                <label class="form-label" for="form2Example17">Email address</label>
                                            </div>
                                            <div data-mdb-input-init class="form-outline mb-4">
                                                <input onChange={handleName} type="text" class="form-control form-control-lg" />
                                                <label class="form-label" for="form2Example17">Name</label>
                                            </div>

                                            <div data-mdb-input-init class="form-outline mb-4">
                                                <input onChange={handlePassword} type="password" id="form2Example27" class="form-control form-control-lg" />
                                                <label class="form-label" for="form2Example27">Password</label>
                                            </div>

                                            <div class="pt-1 mb-4">
                                                <button onClick={createAccount} data-mdb-button-init data-mdb-ripple-init class="btn btn-dark btn-lg btn-block" type="button">Create Account</button>
                                            </div>

                                            {/* <Link class="small text-muted" to="/forgot">Forgot password?</Link>
                        <Link to="/register"><p class="mb-5 pb-lg-2" style={{"color": "#393f81"}}>Don't have an account? 
                            Register here</p></Link> */}
                                        </form>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
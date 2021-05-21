import React from 'react'
import Header from './Header'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

function SignUp() {
    return (
        <div>
            <Header />

            <div className="row">
                <div style={{ width: "50%", padding: "5%" }}>
                    {/* <Link to='/login' style={{ float: "right", display: "inline", marginRight: "5%" }}>Sign Up</Link> */}
                    <Link to='/login' style={{ float: "right", display: "inline", marginRight: "5%" }}>Login</Link>
                    <br /> <br /> <br />
                    <h3>SIGN UP </h3>
                    <form>
                        <input className="form-control mt-5 ml-5" type="text" placeholder="Full Name" />
                        <input className="form-control mt-5 ml-5" type="text" placeholder="Email or Phone Number" />
                        <input className="form-control mt-5 ml-5" type="password" placeholder="Password" />
                        <input className="form-control mt-5 ml-5" type="password" placeholder="Confirm Password" />
                    </form>

                    <input type="checkbox" style={{ float: "left", display: "inline", marginTop: "1%", marginRight: "2%" }} />
                    <p style={{ float: "left", display: "inline" }}>Remember Me</p>
                    <Link to='/forgotpassword' style={{ float: "right", display: "inline" }}>Forgot Password</Link>

                    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: "20%" }}>
                        <button className="btn"> <img src="signin_btn.png" /></button>
                    </div>

                    <p style={{ textAlign: "center", marginTop: "5%" }}>OR</p>

                    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: "5%" }}>
                        <button className="btn" > <img src="signin_google_btn.png" /></button>
                    </div>
                </div>
                <div style={{ width: "50%", height: "100%", objectPosition: "150px 0" }}>
                    <img src="log.jpg" />
                </div>
            </div>
        </div>
        // </div >
    )
}

export default SignUp

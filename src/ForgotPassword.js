import React from 'react'
import Header from './Header'

function ForgotPassword() {
    return (
        <div>
            <Header />

            <div className="row">
                <div style={{ width: "50%", padding: "5%" }}>

                    <br /> <br /> <br />
                    <h3>RESET PASSWORD</h3>
                    <form>
                        {/* <input className="form-control mt-5 ml-5" type="text" placeholder="Full Name" /> */}
                        <input className="form-control mt-5 ml-5" type="text" placeholder="Email or Phone Number" />

                    </form>



                    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: "20%" }}>
                        <button className="btn"> RESET PASSWORD</button>
                    </div>


                </div>
                <div style={{ width: "50%", height: "100%", objectPosition: "150px 0" }}>
                    <img src="log.jpg" />
                </div>
            </div>

        </div>
    )
}

export default ForgotPassword

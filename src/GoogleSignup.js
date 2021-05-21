import React, {Component} from 'react'
import GoogleLogin from 'react-google-login'

class GoogleSignup extends Component{


    responseGoogle = response => {
        console.log(response);
        console.log(response.profileObj);
        
    }

    render() {
        return  (
            <div>
                <GoogleLogin
                    clientId = "726573001290-corhdd2pc93c1slkek6dk2s5113k2737.apps.googleusercontent.com"
                    buttonText = "Login"
                    onSuccess = {this.responseGoogle}
                    onFailure = {this.responseGoogle}
                    cookiePolicy = {"single_host_origin"}
                />
            </div>
        )
    }
}

export default GoogleSignup

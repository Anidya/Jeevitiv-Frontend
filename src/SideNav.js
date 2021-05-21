import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Login from './Login'

function SideNav() {
    return (
        <div>
            <Link to='/login' >LOGIN</Link>

        </div>
    )
}

export default SideNav

import React from 'react'
import HomePage from './HomePage'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import SignUp from './SignUp'
import Login from './Login'
import ForgotPassword from './ForgotPassword'


function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/signup' component={SignUp} />
          <Route exact path='/forgotpassword' component={ForgotPassword} />
        </Switch>
      </Router>
    </div>
  )
}

export default App

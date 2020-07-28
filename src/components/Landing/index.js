import React, { useState } from 'react';
import {BrowserRouter as Router, Route, useHistory } from 'react-router-dom'
import Navigation from '../Navigation/index'
import * as ROUTES from '../../constants/routes';
import Details from '../Details';
import Dashboard from '../Dashboard';
import fb from '../Firebase/index'
import "firebase/auth";
import SignIn from '../SignIn';


const Landing = () => {
    const [signedIn, setSignedIn] = useState(0);
    const [signIn, setSignIn] = useState(0)
    const history = useHistory();

const login = (a)=>{
    setSignIn(a)
}

const loggedin = (a)=>{
    setSignedIn(a)
}

const logout = ()=>{
    fb.auth().signOut()
    .then(function() {
        setSignedIn(0)
        history.push('./')
      })
    .catch(function(error) {
        setSignedIn(0)
        console.log("An error occured.")
      });
}


return(
    <Router>
    <div className={signedIn===0?"wrapper":"wrapper2"}>
        <Navigation signedIn={signedIn} login={login} logout={logout}/>
        {signIn===1?<SignIn login={login} loggedin={loggedin} />:""}
        <div className="container">
            {signedIn===0?
                <div className="landing_bg">
                <h1>Front-End Developer Test</h1>
                <h2>by Chris Steiner</h2>
                <p className="landing">
                    This is my solution for the Front-End Developer Test of Next Gate Tech.<br/>
                    I created a landing page, a sign-in/out and a dashboard. By using flexbox 
                    I maintained responsiveness and I mimicked the styling of <a href="nextgatetech.com">nextgatetech</a>.<br/><br/>
                    Have fun exploring my work and feel free to contact me, if you have any questions!    
                </p>
                </div>:""}
            {signedIn===1?
                    <Route exact path={ROUTES.DASH} component={Dashboard} />
                    :""}
            {signedIn===1?
                    <Route path={ROUTES.DETAILS} component={Details} />
                    :""}
        </div>  
    </div>
    </Router>
  )
};
 
export default Landing;
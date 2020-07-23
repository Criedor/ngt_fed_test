import React, { useState } from 'react';
import {BrowserRouter as Router, Route } from 'react-router-dom'
import Navigation from '../Navigation/index'
import * as ROUTES from '../../constants/routes';
import SignInPage from '../SignIn';
import HomePage from '../Home';


const Landing = () => {
    const [signedIn, setSignedIn] = useState(0);

    const config = {
        apiKey: process.env.REACT_APP_API_KEY,
        authDomain: process.env.REACT_APP_AUTH_DOMAIN,
        databaseURL: process.env.REACT_APP_DATABASE_URL,
        projectId: process.env.REACT_APP_PROJECT_ID,
        storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
        messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
        appId: process.env.REACT_APP_APP_ID
      };




return(
    <Router>
        <Navigation signedIn={signedIn}/>
        <div className="container">
            {signedIn===0?
                <>
                <h1>Front-End Developer Test</h1>
                <h2>by Chris Steiner</h2>
                <p className="landing">
                    This is my solution for the Front-End Developer Test of Next Gate Tech.<br/>
                    I created a landing page, a sign-in/out and a dashboard. By using flexbox 
                    I maintained responsiveness and I mimicked the styling of <a href="nextgatetech.com">nextgatetech</a>.<br/><br/>
                    Have fun exploring my work and feel free to contact me, if you have any questions!    
                </p>
                </>:""}
            <Route path={ROUTES.SIGN_IN} component={SignInPage} />
            <Route path={ROUTES.HOME} component={HomePage} />
        </div>  
    </Router>
  )
};
 
export default Landing;
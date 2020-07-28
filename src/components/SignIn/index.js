import React from 'react';
import { useHistory } from "react-router-dom";
import * as firebase from "firebase/app";
import "firebase/auth";
import fb from '../Firebase/index'
require('dotenv').config()

const SignIn = ({login, loggedin}) => {

    const history = useHistory();

    const firebase_auth = (e) =>{
        e.preventDefault()
        let email = e.currentTarget[0].value
        let password = e.currentTarget[1].value

        fb.auth().signInWithEmailAndPassword(email, password)
            .catch(function(error) {
                var errorCode = error.code;
                var errorMessage = error.message;
        
                if (errorCode === 'auth/wrong-password') {
                    alert('Wrong password.');
                } 
                else {
                    alert(errorMessage);
                }
                firebase.auth().signOut()
            });
        
        firebase.auth().onAuthStateChanged(function(user) {
            if (user) {
                loggedin(1)
                login(0)
                history.push('/dashboard')
            } 
        })
    }
 


return (
<div className="modal">
        <form className="signin_form" onSubmit={(e)=>firebase_auth(e)}>
            <div className="close"><strong onClick={()=>login(0)}>X</strong></div>
            <h2>Login </h2>
            <br/>
            <label> Email:</label>
            <input autoFocus type="text" name="name" placeholder="your-email@example.com" defaultValue="frontend@ngt.com"/>
            <label> Password:</label>
            <input type="password" name="password" defaultValue="ThisIsASecurePassword!" />,
            <br/>
            <button style={{alignSelf: "center"}}>Login</button>
        </form>
    </div>
  );
}
  export default SignIn;
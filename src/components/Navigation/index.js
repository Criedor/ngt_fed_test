import React from 'react';
import { useHistory } from "react-router-dom";

function Navigation({signedIn, login, logout}) {
  const history = useHistory();

return(
  <div className="navi_wrapper">
    <div className="navi">
        <img className="logo" src="../../img/logo.png" alt="next gate tech" onClick={()=>history.push('../dashboard')}></img>
        {signedIn===0?<button onClick={()=>login(1)}>{`Sign in >`}</button>:<button onClick={()=>logout()}>{`Sign out >`}</button>}
    </div>
  </div>
  )
};
 
export default Navigation;
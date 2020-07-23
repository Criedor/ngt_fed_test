import React, { useState } from 'react';
 
function Navigation({signedIn}) {


return(
    <div className="navi">
        <img className="logo" src="../../img/logo.png" alt="next gate tech"></img>
        {signedIn===0?<button>{`Sign in >`}</button>:<button>{`Sign out >`}</button>}
    </div>
  )
};
 
export default Navigation;
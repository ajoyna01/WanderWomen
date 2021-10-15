import React from "react";
import '../styles/App.css'
import { Link, useHistory } from "react-router-dom";


function Header({user, backButton}) {
  const history = useHistory();
  return(
    <div className="header">
      {backButton ? (
        <span class="material-icons" onClick={() => history.replace(backButton)}>arrow_back_ios</span>
      ): (
        <span className="material-icons orange600">face</span>
      )}
      
     
      <Link to="/">
        <img className="logo"
        src="data:image/png;base64,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"
        alt="logo"/>
      </Link>
      <Link to="/chat">
      <span className="material-icons orange600">try</span>
      </Link>
      {/* <span className="login">Hello {user.username}!</span> */}
    </div>
  )
};
export default Header;
import React from "react";
import {Link, useLocation} from "react-router-dom";


function NavTabs(props) {
  
  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <Link to="/" className={window.location.pathname==="/home" ? "nav-link active": "nav-link"}>home  </Link>
      </li>
      <li className="nav-item">
        <Link to="/discover" className={window.location.pathname==="/discover" ? "nav-link active": "nav-link"}> discover </Link>
      </li>
    </ul>
  );
}

export default NavTabs;

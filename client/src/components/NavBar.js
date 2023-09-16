import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light"> 
        <ul className="navbar-nav"> 
          <li className="nav-item"> 
            <NavLink className="nav-link" to="/"> Home </NavLink> 
          </li>

          <li className="nav-item"> 
            <NavLink className="nav-link" to="/users"> Login </NavLink> 
          </li>
          <li className="nav-item"> 
            <NavLink className="nav-link" to="/create_bicycle"> Create Bicycle </NavLink> 
          </li>
          <li className="nav-item"> 
            <NavLink className="nav-link" to="/create_user"> Create Account </NavLink> 
          </li>
          <li className="nav-item"> 
            <NavLink className="nav-link" to="/bicycles"> See All Bicycles </NavLink> 
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;

import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light"> 
        <ul className="navbar-nav"> 
          <li className="nav-item"> 
            <NavLink className="nav-link text-black" to="/"> Home </NavLink> 
          </li>

          <li className="nav-item"> 
            <NavLink className="nav-link text-success" to="/users"> Login </NavLink> 
          </li>
          <li className="nav-item"> 
            <NavLink className="nav-link text-success" to="/create_user"> Create Account </NavLink> 
          </li>
          <li className="nav-item"> 
            <NavLink className="nav-link text-danger" to="/create_bicycle"> Create Bicycle </NavLink> 
          </li>
          <li className="nav-item"> 
            <NavLink className="nav-link text-danger" to="/bicycles"> See All Bicycles </NavLink> 
          </li>
          <li className="nav-item"> 
            <NavLink className="nav-link text-success" to="/wish_list"> Wish List </NavLink> 
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;

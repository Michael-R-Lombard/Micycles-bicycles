import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <div>
      <nav className="navbarStyles">
        <li>
          {" "}
          <NavLink to="/"> Home </NavLink>
        </li>
       
        <li>
          <NavLink to="/random"> Random Bicycle </NavLink>
        </li>
        <li>
          <NavLink to="/create_bicycle"> Create Bicycle </NavLink>
        </li>
        <li>
          <NavLink to="/create_user"> Create Account </NavLink>
          </li>
          <li>
          <NavLink to="/bicycles"> See All Bicycles </NavLink>
        </li>
        
      </nav>
    </div>
  );
}

export default NavBar;
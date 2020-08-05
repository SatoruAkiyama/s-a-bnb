import React from "react";
import { NavLink } from "react-router-dom";

import "./MenuItem.scss";

const MenuItem = ({ toggleMenu }) => {
  return (
    <ul className="menu-items">
      <li className="menu-item">
        <NavLink exact to="become-a-host" onClick={toggleMenu}>
          Become a host
        </NavLink>
      </li>
      <li className="menu-item">
        <NavLink exact to="/help" onClick={toggleMenu}>
          Help
        </NavLink>
      </li>
      <li className="menu-item">
        <NavLink exact to="/sign-up" onClick={toggleMenu}>
          Sign up
        </NavLink>
      </li>
      <li className="menu-item">
        <NavLink exact to="/log-in" onClick={toggleMenu}>
          Log in
        </NavLink>
      </li>
    </ul>
  );
};
export default MenuItem;

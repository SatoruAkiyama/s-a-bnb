import React from "react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { modalToggle } from "../../redux/modal/modalActions";
import { logout } from "../../redux/user/userActions";
import { selectCurrentUserEmail } from "../../redux/user/userSelector";

import Login from "../login/Login";
import SignUp from "../sign-up/SignUp";

import "./MenuItem.scss";

const MenuItem = ({ toggleMenu }) => {
  const dispatch = useDispatch();

  const currentUserEmail = useSelector(selectCurrentUserEmail);

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
      {currentUserEmail ? (
        <>
          <li className="menu-item">
            <NavLink exact to="/account" onClick={toggleMenu}>
              {currentUserEmail}
            </NavLink>
          </li>
          <li className="menu-item" onClick={() => dispatch(logout())}>
            <span onClick={toggleMenu}>Log out</span>
          </li>
        </>
      ) : (
        <>
          <li
            className="menu-item"
            onClick={() => dispatch(modalToggle(true, <SignUp />))}
          >
            <span onClick={toggleMenu}>Sign Up</span>
          </li>
          <li
            className="menu-item"
            onClick={() => dispatch(modalToggle(true, <Login />))}
          >
            <span onClick={toggleMenu}>Log in</span>
          </li>
        </>
      )}
    </ul>
  );
};
export default MenuItem;

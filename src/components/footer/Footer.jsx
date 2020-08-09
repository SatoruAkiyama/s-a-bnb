import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { modalToggle } from "../../redux/modal/modalActions";
import { logout } from "../../redux/user/userActions";
import { selectCurrentUserEmail } from "../../redux/user/userSelector";

import Login from "../login/Login";
import SignUp from "../sign-up/SignUp";

const Footer = () => {
  const dispatch = useDispatch();

  const currentUserEmail = useSelector(selectCurrentUserEmail);
  return (
    <footer className="page-footer">
      <div className="container">
        <div className="row">
          <div className="col l6 s12">
            <h5 className="white-text">S-A-bnb</h5>
            <p className="grey-text text-lighten-4 mb-s">
              Hello, this is a web application like a hosting service.
            </p>
          </div>
          <div className="col l4 offset-l2 s12">
            <ul>
              <li className="mb-s">
                <Link className="grey-text text-lighten-3" to="/become-a-host">
                  Become a host
                </Link>
              </li>
              <li className="mb-s">
                <Link className="grey-text text-lighten-3" to="/help">
                  Help
                </Link>
              </li>
              {currentUserEmail ? (
                <>
                  <li className="mb-s">
                    <Link to="/account" className="grey-text text-lighten-3">
                      {currentUserEmail}
                    </Link>
                  </li>
                  <li className="mb-s">
                    <span
                      className="grey-text text-lighten-3 pointer"
                      onClick={() => dispatch(logout())}
                    >
                      Log out
                    </span>
                  </li>
                </>
              ) : (
                <>
                  <li
                    className="mb-s"
                    onClick={() => dispatch(modalToggle(true, <SignUp />))}
                  >
                    <span className="grey-text text-lighten-3 pointer">
                      Sign Up
                    </span>
                  </li>
                  <li
                    className="mb-s"
                    onClick={() => dispatch(modalToggle(true, <Login />))}
                  >
                    <span className="grey-text text-lighten-3 pointer">
                      Log in
                    </span>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        <div className="container">
          <Link className="grey-text text-lighten-4 right" to="/">
            © 2020 Satoru Akiyama
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

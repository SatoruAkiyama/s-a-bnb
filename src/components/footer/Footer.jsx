import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { modalToggle } from "../../redux/modal/modalActions";
import { logout } from "../../redux/user/userActions";
import { selectCurrentUserEmail } from "../../redux/user/userSelector";

import Login from "../login/Login";
import SignUp from "../sign-up/SignUp";
import Logo from "../../assets/logo.png";
import ShareButton from "../share-button/ShareButton";

const Footer = () => {
  const dispatch = useDispatch();

  const currentUserEmail = useSelector(selectCurrentUserEmail);
  return (
    <footer className="page-footer fade-in" style={{ backgroundColor: "#000" }}>
      <div className="container">
        <div className="row">
          <div className="col l6 s12">
            <h5 className="white-text">
              <Link to="/" style={{ color: `#ff0062` }}>
                S-A-bnb{" "}
                <img
                  src={Logo}
                  alt=""
                  width="30px"
                  height="30px"
                  style={{ transform: `translateY(7px)` }}
                />
              </Link>
            </h5>
            <p className="grey-text text-lighten-4 mb-s">
              Hello, this is a web application like vacation rental online
              marketplace.
            </p>
          </div>
          <div className="col l4 offset-l2 s12">
            <ul>
              <li className="mb-s">
                <Link className="grey-text text-lighten-3" to="/">
                  Top
                </Link>
              </li>
              <li className="mb-s">
                <Link className="grey-text text-lighten-3" to="/about-us">
                  About us
                </Link>
              </li>
              <li className="mb-s">
                <Link className="grey-text text-lighten-3" to="/recruit">
                  Recruit
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
          <ShareButton url="https://s-a-bnb.netlify.app/" />
          <a
            className="grey-text text-lighten-4 right"
            href="https://satoruakiyama.com"
            target="_blank"
            rel="noreferrer noopener"
          >
            © 2020 Satoru Akiyama
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

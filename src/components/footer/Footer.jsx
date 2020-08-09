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
    <footer className="page-footer fade-in" style={{ backgroundColor: "#000" }}>
      <div className="container">
        <div className="row">
          <div className="col l6 s12">
            <h5 className="white-text">
              <Link to="/" style={{ color: `#ff0062` }}>
                S-A-bnb
              </Link>
            </h5>
            <p className="grey-text text-lighten-4 mb-s">
              Hello, this is a web application like a hosting service.
            </p>
          </div>
          <div className="col l4 offset-l2 s12">
            <ul>
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
          <div
            className="fb-share-button"
            data-href="https://s-a-bnb.netlify.app"
            data-layout="button"
            data-size="small"
          >
            <a
              target="_blank"
              rel="noreferrer noopener"
              href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fs-a-bnb.netlify.app%2F&amp;src=sdkpreparse"
              className="fb-xfbml-parse-ignore"
            >
              <button
                className="btn-large waves-effect waves-light   blue darken-3"
                type="submit"
                name="action"
                style={{ color: `#fff`, width: `180px`, fontWeight: `500` }}
              >
                SHARE&nbsp;&nbsp;<i className="fab fa-facebook"></i>
              </button>
            </a>
          </div>

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

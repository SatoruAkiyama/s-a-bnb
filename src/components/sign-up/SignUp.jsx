import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { modalToggle } from "../../redux/modal/modalActions";

import Login from "../login/Login";
import "../login/Login.scss";

const SignUp = () => {
  const dispatch = useDispatch();

  const [signUpWithEmail, setSignUpWithEmail] = useState(false);

  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
  });

  const { email, password } = userInfo;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInfo({
      ...userInfo,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, password);
  };

  return (
    <div className="login-form fade-in-fast">
      <span>Sign Up</span>
      <form>
        <button className="facebook-login">
          Connect With Facebook&nbsp;&nbsp;<i className="fab fa-facebook"></i>
        </button>
        <button className="google-login">
          Connect With Google &nbsp;&nbsp;
          <i className="fab fa-google-plus-g" />
        </button>
        <div className="login-or center">
          <span>or</span>
          <div className="or-divider"></div>
        </div>
        {signUpWithEmail ? (
          <div className="col s12 fade-in-fast">
            <input
              onChange={handleChange}
              name="email"
              value={email}
              type="text"
              placeholder="Email address"
            />
            <input
              onChange={handleChange}
              name="password"
              value={password}
              type="password"
              placeholder="Password"
            />
            <button className="sign-up-button" onClick={handleSubmit}>
              Sign Up
            </button>
          </div>
        ) : (
          <button type="button" className="sign-up-button">
            <span onClick={() => setSignUpWithEmail(true)}>
              Sign up with email
            </span>
          </button>
        )}
        <div className="divider"></div>
        <div>
          Already have an account?{" "}
          <span
            className="pointer"
            onClick={() => dispatch(modalToggle(true, <Login />))}
          >
            Log in
          </span>
        </div>
      </form>
    </div>
  );
};

export default SignUp;

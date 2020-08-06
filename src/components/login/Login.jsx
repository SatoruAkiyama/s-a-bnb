import React, { useState } from "react";
import { useDispatch } from "react-redux";

import SignUp from "./SignUp";

import { modalToggle } from "../../redux/modal/modalActions";

import "./Login.scss";

const Login = () => {
  const dispatch = useDispatch();

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
      <span>Log in</span>
      <form onSubmit={handleSubmit}>
        <button className="facebook-login">Connect With Facebook</button>
        <button className="google-login">Connect With Google</button>
        <div className="login-or center">
          <span>or</span>
          <div className="or-divider"></div>
        </div>
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
        <button className="sign-up-button">Login</button>
        <div className="divider"></div>
        <div>
          Don't have an account?{" "}
          <span
            className="pointer"
            onClick={() => {
              dispatch(modalToggle(true, <SignUp />));
            }}
          >
            Sign up
          </span>
        </div>
      </form>
    </div>
  );
};

export default Login;

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import swal from "sweetalert";

import SignUp from "../sign-up/SignUp";

import { modalToggle } from "../../redux/modal/modalActions";
import { signUpAndSignIn } from "../../redux/user/userActions";

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = `${window.apiHost}/users/login`;
    const res = await axios.post(url, userInfo);

    if (res.data.msg === "badPass") {
      swal({
        title: "Invalid password",
        text:
          "This password is incorrect. Please make sure to use the correct password for this email.",
        icon: "error",
      });
    } else if (res.data.msg === "noEmail") {
      swal({
        title: "Invalid email",
        text: "This email has not been resistered yet.",
        icon: "error",
      });
    } else if (res.data.msg === "loggedIn") {
      swal({
        title: "Success",
        icon: "success",
      }).then(() => {
        dispatch(modalToggle());
      });
      dispatch(signUpAndSignIn(res.data));
    }
  };

  return (
    <div className="login-form fade-in-fast">
      <span>Log in</span>
      <form onSubmit={handleSubmit}>
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
        <input
          onChange={handleChange}
          name="email"
          value={email}
          type="email"
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

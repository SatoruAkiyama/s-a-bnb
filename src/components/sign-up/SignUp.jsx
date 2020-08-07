import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import swal from "sweetalert";

import { modalToggle } from "../../redux/modal/modalActions";
import { register } from "../../redux/user/userActions";
// import { selectCurrentUser } from "../../redux/user/userSelector";

import Login from "../login/Login";
import "../login/Login.scss";

const SignUp = () => {
  const dispatch = useDispatch();

  // const currentUser = useSelector(selectCurrentUser);
  // console.log(currentUser);

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = `${window.apiHost}/users/signup`;
    const res = await axios.post(url, userInfo);

    if (res.data.msg === "userExists") {
      swal({
        title: "Email Exists",
        text:
          "The email you provided is already resistered. Please try another",
        icon: "error",
      });
    } else if (res.data.msg === "invalidData") {
      swal({
        title: "Invalid email/password",
        text: "Please provide a vaild email and password",
        icon: "error",
      });
    } else if (res.data.msg === "userAdded") {
      swal({
        title: "Success",
        icon: "success",
      });
      dispatch(register(res.data));
    }

    // const url2 = `${window.apiHost}/users/token-check`;
    // const res2 = await axios.post(url2, { token });
    // console.log(res2.data);
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
              required
            />
            <input
              onChange={handleChange}
              name="password"
              value={password}
              type="password"
              placeholder="Password"
              required
            />
            <button className="sign-up-button" onClick={handleSubmit}>
              Sign Up
            </button>
          </div>
        ) : (
          <button
            type="button"
            className="sign-up-button"
            onClick={() => setSignUpWithEmail(true)}
          >
            <span>Sign up with email</span>
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

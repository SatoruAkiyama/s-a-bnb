import React from "react";
import { useDispatch } from "react-redux";

import { modalToggle } from "../../redux/modal/modalActions";

import Login from "../login/Login";

const SignUp = () => {
  const dispatch = useDispatch();
  return (
    <div className="login-form fade-in-fast">
      <span>Sign Up</span>
      <form>
        <button className="facebook-login">Connect With Facebook</button>
        <button className="google-login">Connect With Google</button>
        <div className="login-or center">
          <span>or</span>
          <div className="or-divider"></div>
        </div>
        <button className="sign-up-button">Sign up with email</button>
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

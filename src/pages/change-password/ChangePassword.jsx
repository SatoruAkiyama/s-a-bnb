import React, { useState } from "react";
import axios from "axios";
import swal from "sweetalert";

const ChangePasssword = ({ token }) => {
  const [password, setPassword] = useState({
    newPassword: "",
    confirmPassword: "",
  });
  const { newPassword, confirmPassword } = password;

  const url = `${window.apiHost}/users/change-password`;
  const data = {
    token,
    newPassword,
  };

  const hundleChange = (e) => {
    const { name, value } = e.target;
    setPassword({
      ...password,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      swal({
        title: "Password don't match",
        icon: "error",
      });
    } else {
      const res = await axios.post(url, data);
      console.log(res.data);
      if (res.data.msg === "passUpdated") {
        swal({
          title: "Password is updated",
          icon: "success",
        });
      } else {
        swal({
          title: "There was a error cancelling",
          icon: "error",
        });
      }
    }
  };

  return (
    <div
      className="change-password  fade-in"
      style={{ margin: `0 auto`, width: `100%` }}
    >
      <h1 className="main-header-text">Change Password</h1>
      <form
        onSubmit={handleSubmit}
        style={{ maxWidth: `800px`, margin: `0 auto` }}
      >
        <input
          name="newPassword"
          value={newPassword}
          onChange={hundleChange}
          placeholder="New Password"
          required
          type="password"
        />
        <br />
        <input
          name="confirmPassword"
          value={confirmPassword}
          onChange={hundleChange}
          placeholder="Confirmed Password"
          required
          type="password"
        />
        <button
          className="btn-large waves-effect waves-light  red accent-3"
          type="submit"
          name="action"
          style={{
            color: `#fff`,
            width: `180px`,
            fontWeight: `500`,
            marginTop: `30px`,
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ChangePasssword;

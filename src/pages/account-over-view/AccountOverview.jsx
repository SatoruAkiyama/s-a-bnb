import React from "react";
import { useSelector } from "react-redux";

import { selectCurrentUserEmail } from "../../redux/user/userSelector";

const AccountOverview = () => {
  const user = useSelector(selectCurrentUserEmail);
  return (
    <div className="account-overview">
      <h1 className="main-header-text">Account</h1>
      <p className="flow-text">
        Hello <span style={{ fontWeight: `500` }}>"{user}"</span>.
      </p>
      <p className="flow-text">
        This is your account page. Thank you for joing us.
      </p>
      <p className="flow-text mb-m">
        You can see your reservation lists and cancell it. <br />
        Also, you can change your password.
      </p>
      <p>I am happy if you enjoy this web site.</p>
    </div>
  );
};

export default AccountOverview;

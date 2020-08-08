import React from "react";
import { Link } from "react-router-dom";

import "./AccountBar.scss";

const AccountBar = () => (
  <div
    className="col s12"
    style={{ margin: `30px auto 60px`, maxWidth: `95%` }}
  >
    <div className="card horizontal">
      <img
        src="https://airbnb-clone-prexel-images.s3.amazonaws.com/genericAvatar.png"
        alt=""
        width="100px"
        height="100px"
      />
      <div className="card-stacked">
        <div className="card-content account-card">
          <ul>
            <li>
              <Link to="/account">Account</Link>
            </li>
            <li>
              <Link to="/account/reservations/confirmed">
                Confirmed Reservations
              </Link>
            </li>
            <li>
              <Link to="/account/reservations/past">Past Reservations</Link>
            </li>
            <li>
              <Link to="/account/change-password">Change Password</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
);

export default AccountBar;

import React from "react";

import MenuItem from "../menu-item/MenuItem";

import "./ToggleMenu.scss";

const ToggleMenu = ({ toggleMenu, open }) => {
  const year = new Date().getFullYear();
  return (
    <div className={`toggle-menu ${open ? "toggle-open" : ""}`}>
      <div className="toggle-menu__inner">
        <div className="toggle-menu__main mb-m">
          <MenuItem toggleMenu={toggleMenu} />
        </div>
        <div
          className="fb-share-button"
          data-href="https://s-a-bnb.netlify.app"
          data-layout="button"
          data-size="large"
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
      </div>

      <div className="copy-right">
        <a href="https://satoruakiyama.com">&copy; {year} Satoru Akiyama</a>
      </div>
    </div>
  );
};

export default ToggleMenu;

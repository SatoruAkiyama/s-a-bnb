import React from "react";

import MenuItem from "../menu-item/MenuItem";
import ShareButton from "../share-button/ShareButton";

import "./ToggleMenu.scss";

const ToggleMenu = ({ toggleMenu, open }) => {
  const year = new Date().getFullYear();
  return (
    <div className={`toggle-menu ${open ? "toggle-open" : ""}`}>
      <div className="toggle-menu__inner">
        <div className="toggle-menu__main mb-ss">
          <MenuItem toggleMenu={toggleMenu} />
        </div>
      </div>
      <div>
        <ShareButton />
      </div>
      <div className="copy-right">
        <a href="https://satoruakiyama.com">&copy; {year} Satoru Akiyama</a>
      </div>
    </div>
  );
};

export default ToggleMenu;

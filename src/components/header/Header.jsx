import React, { useState, useCallback } from "react";
import { Link, useLocation } from "react-router-dom";

import ToggleMenu from "../toggle-menu/ToggleMenu";
import HeaderMenu from "../header-menu/HeaderMenu";

import "./Header.scss";

const Header = () => {
  const [open, setToggle] = useState(false);
  const toggleMenu = useCallback(() => {
    setToggle(!open);
  }, [open]);
  const location = useLocation();
  return (
    <header
      className={`header ${open ? "open" : ""} ${
        location.pathname === "/" ? "home-header" : ""
      }`}
    >
      <div className="header__inner">
        <div className="header__logo">
          <Link to="/" onClick={() => setToggle(false)}>
            S-A-bnb
          </Link>
        </div>
        <div className="header__nav__pc">
          <HeaderMenu />
        </div>
        <div className="header__nav">
          <div
            className={`menu-btn ${open ? "menu-open" : ""}`}
            onClick={() => toggleMenu()}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <ToggleMenu toggleMenu={toggleMenu} open={open} />
      </div>
    </header>
  );
};

export default Header;

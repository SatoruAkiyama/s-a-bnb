import React from "react";
import { FacebookShareButton, FacebookIcon } from "react-share";

const ShareButton = () => (
  <FacebookShareButton url="https://s-a-bnb.netlify.app">
    <span style={{ fontSize: `22px`, color: `#fff` }}>SHARE</span>{" "}
    <FacebookIcon style={{ transform: `translateY(5px)` }} size="25px" round />
  </FacebookShareButton>
);

export default ShareButton;

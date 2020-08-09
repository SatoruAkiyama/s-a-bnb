import React from "react";
import { Link } from "react-router-dom";

import Footer from "../footer/Footer";
import PageHeader from "../../components/page-header/PageHeader";
import errorImg from "../../assets/15.svg";

const ErrorContent = () => (
  <div className="fade-in">
    <div className="error-content mb-l">
      <div className="page-header-containerv mb-l">
        <PageHeader title="404 Error" imageUrl={errorImg} />
      </div>
      <h1 className="main-header-text center">Sorry, page not found..</h1>
      <div className=" center">
        <Link to="/">
          <button
            className="btn-large waves-effect waves-light  red accent-3"
            type="button"
            style={{ color: `#fff`, fontSize: `14px` }}
          >
            Go back
          </button>
        </Link>
      </div>
    </div>
    <Footer />
  </div>
);
export default ErrorContent;

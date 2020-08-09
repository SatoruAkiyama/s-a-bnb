import React from "react";

import PageHeader from "../../components/page-header/PageHeader";
import Footer from "../../components/footer/Footer";

const AboutUsPage = () => {
  return (
    <div className="fade-in">
      <div className="about-us">
        <div className="page-header-container">
          <PageHeader
            title="About us"
            imageUrl="https://images.pexels.com/photos/1612351/pexels-photo-1612351.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AboutUsPage;

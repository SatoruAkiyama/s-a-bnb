import React from "react";

import PageHeader from "../../components/page-header/PageHeader";
import Footer from "../../components/footer/Footer";

const RecruitPage = () => {
  return (
    <div className="fade-in">
      <div className="reruit">
        <div className="page-header-container">
          <PageHeader
            title="Recruit"
            imageUrl="https://images.pexels.com/photos/3184430/pexels-photo-3184430.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default RecruitPage;

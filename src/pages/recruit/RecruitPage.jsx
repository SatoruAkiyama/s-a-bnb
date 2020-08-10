import React from "react";
import { Link } from "react-router-dom";

import PageHeader from "../../components/page-header/PageHeader";
import Footer from "../../components/footer/Footer";

import { RECRUIT_DATA_FOR_PREVIEW } from "../../data/recruitData";

const RecruitPage = () => {
  const recruitData = RECRUIT_DATA_FOR_PREVIEW;
  return (
    <div className="fade-in">
      <div className="reruit mb-l">
        <div className="page-header-container">
          <PageHeader
            title="Recruit"
            imageUrl="https://images.pexels.com/photos/3184430/pexels-photo-3184430.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          />
        </div>
        <div className="container">
          <h1 className="main-header-text">Who we are looking for.</h1>
          <div className="mb-m">
            <blockquote>
              <p className="flow-text">
                For now, we are looking for 6 types of jobs.
                <li> {recruitData[0].role}</li>
                <li> {recruitData[1].role}</li>
                <li> {recruitData[2].role}</li>
                <li> {recruitData[3].role}</li>
                <li> {recruitData[4].role}</li>
                <li> {recruitData[5].role}</li>
                <br />
                We need people who are passionate and really want to work with
                us. <br />
                Also we ask you to do your best for everything. You need to do
                hard working, also you need value your family and your own time
                and hobbies.
                <br /> We constantly keep on growing. We are interested in every
                new technology or trend. We always think of future.
                <br />
                We want to grow with you. Let's make good company together.
              </p>
            </blockquote>
          </div>
          <div className="row">
            {recruitData.map(
              ({
                id,
                imageUrl,
                link,
                role,
                jobtype,
                location,
                salary,
                experienceLevel,
              }) => (
                <div className="col s12 m6 l4" key={id}>
                  <div className="card">
                    <div className="card-image">
                      <img src={imageUrl} alt="" />
                    </div>
                    <div
                      className="card-content"
                      style={{ maxWidth: `95%`, margin: `20px auto` }}
                    >
                      <div className="mb-ss">
                        <span
                          style={{
                            fontWeight: `500`,
                            display: `inline-block`,
                          }}
                        >
                          Role:
                        </span>{" "}
                        <span style={{ marginLeft: `15px` }}>{role}</span>
                      </div>
                      <div className="mb-ss">
                        <span
                          style={{
                            fontWeight: `500`,
                            display: `inline-block`,
                          }}
                        >
                          Job Type:
                        </span>{" "}
                        <span style={{ marginLeft: `15px` }}>{jobtype}</span>
                      </div>
                      <div className="mb-ss">
                        <span
                          style={{
                            fontWeight: `500`,
                            display: `inline-block`,
                          }}
                        >
                          Location:
                        </span>{" "}
                        <span style={{ marginLeft: `15px` }}>{location}</span>
                      </div>
                      <div className="mb-ss">
                        <span
                          style={{
                            fontWeight: `500`,
                            display: `inline-block`,
                          }}
                        >
                          Salary:
                        </span>{" "}
                        <span style={{ marginLeft: `15px` }}>{salary}</span>
                      </div>
                      <div className="mb-ss">
                        <span
                          style={{
                            fontWeight: `500`,
                            display: `inline-block`,
                          }}
                        >
                          Experience Level:
                        </span>{" "}
                        <span style={{ marginLeft: `15px` }}>
                          {experienceLevel}
                        </span>
                      </div>
                    </div>
                    <div className="card-action center">
                      <Link to={`/recruit/${link}`}>
                        <button
                          className="btn-large waves-effect waves-light  red accent-3"
                          type="submit"
                          name="action"
                          style={{
                            color: `#fff`,
                            width: `180px`,
                            fontWeight: `500`,
                          }}
                        >
                          Apply
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default RecruitPage;

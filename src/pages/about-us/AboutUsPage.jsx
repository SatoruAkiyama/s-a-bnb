import React from "react";

import PageHeader from "../../components/page-header/PageHeader";
import Footer from "../../components/footer/Footer";

const AboutUsPage = () => {
  return (
    <div className="fade-in">
      <div className="about-us  mb-l">
        <div className="page-header-container">
          <PageHeader
            title="About us"
            imageUrl="https://images.pexels.com/photos/1612351/pexels-photo-1612351.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          />
        </div>
        <div className="container">
          <h1 className="main-header-text">We are S-A-bnb</h1>
          <div className="row mb-m">
            <div className="col s12">
              <div className="mb-m">
                <blockquote>
                  <p className="flow-text">
                    We believe that innovation is born from creative freedom and
                    love for the project. Creating greatness comes from a
                    nurtured soul. Different ideas are born from different
                    minds. Because we believe in a world of diversity and
                    challenge, our team of different backgrounds is committed to
                    furthering their skills and growing their endless
                    possibilities.
                  </p>
                </blockquote>
              </div>
              <div
                className="card"
                style={{
                  padding: `20px`,
                }}
              >
                <div
                  className="card-content blue-grey-text text-darken-4"
                  style={{
                    maxWidth: `800px`,
                    margin: `20px auto`,
                  }}
                >
                  <span
                    className="card-title"
                    style={{
                      maxWidth: `800px`,
                      margin: `20px auto`,
                    }}
                  >
                    Company name
                  </span>
                  <p>Our company name is「 S-A-bnb 」.</p>
                </div>
                <div
                  className="card-content  blue-grey-text text-darken-4"
                  style={{
                    maxWidth: `800px`,
                    margin: `20px auto`,
                  }}
                >
                  <span className="card-title">Founded</span>
                  <p>Our company was founed in 2020/ 05/ 10</p>
                </div>
                <div
                  className="card-content  blue-grey-text text-darken-4"
                  style={{
                    maxWidth: `800px`,
                    margin: `20px auto`,
                  }}
                >
                  <span className="card-title">Excutive</span>
                  <p>
                    CEO: Satoru Akiyama
                    <br />
                    COO: Kdanovn oavno
                  </p>
                </div>
                <div
                  className="card-content  blue-grey-text text-darken-4"
                  style={{
                    maxWidth: `800px`,
                    margin: `20px auto`,
                  }}
                >
                  <span className="card-title">Business</span>
                  <p>Vacation rental online marketplace.</p>
                </div>
              </div>
            </div>
          </div>
          <h1 className="main-header-text">
            To inspire, to be exciting, to be different, to be best.
          </h1>
          <div className="mb-m">
            <blockquote>
              <p className="flow-text mb-ss">
                We believe that good business and life come from free minds.
              </p>
              <p className="flow-text mb-ss">
                We produce affordable, high quality one-of-a-kind products of an
                international clientele.
              </p>
              <p className="flow-text mb-ss">
                Our products offer diversity, innovation, excitement and are
                made to impress.
              </p>
              <p className="flow-text mb-ss">
                Our company operates on an environmentally friendly and socially
                inclusive belief system.
              </p>
              <p className="flow-text mb-ss">
                We are sure the we can make happy. You can enjoy your life.
              </p>
            </blockquote>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AboutUsPage;

import React, { useState } from "react";
import axios from "axios";
import swal from "sweetalert";

import PageHeader from "../../components/page-header/PageHeader";
import Footer from "../../components/footer/Footer";

import { getWorkData } from "../../data/recruitData";

const RecruitContactPage = ({ match }) => {
  const data = getWorkData(match.params.recruitId);
  const now = new Date();
  const day = `${now.getFullYear()}/${now.getMonth() + 1}/${now.getDate()}`;
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    text: "",
    type: data.role,
    date: day,
  });

  const { name, email, text } = formData;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios
      .post(`https://fir-a-bnb.firebaseio.com/recruit.json`, formData)
      .then(() => {
        swal({
          title: "Your application has been sent.",
          icon: "success",
        });
      })
      .then(() =>
        setFormData({
          ...formData,
          name: "",
          email: "",
          text: "",
        })
      )
      .catch((e) => {
        swal({
          title: e.message,
          icon: "success",
        });
      });
  };

  return (
    <div className="fade-in">
      <div className="mb-l">
        <div className="page-header-container">
          <PageHeader title="Apply" imageUrl={data.imageUrl} />
        </div>
        <div className="container">
          <h1 className="main-header-text mb-">Rectuit Application</h1>
          <div style={{ maxWidth: `960px`, margin: `30px auto 0` }}>
            <div className="row">
              <div className="col s12 m6 l4">
                <div className="mb-ss">
                  <span
                    style={{
                      fontWeight: `500`,
                      display: `inline-block`,
                    }}
                  >
                    Role:
                  </span>{" "}
                  <span style={{ marginLeft: `15px` }}>{data.role}</span>
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
                  <span style={{ marginLeft: `15px` }}>{data.jobtype}</span>
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
                  <span style={{ marginLeft: `15px` }}>{data.location}</span>
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
                  <span style={{ marginLeft: `15px` }}>{data.salary}</span>
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
                    {data.experienceLevel}
                  </span>
                </div>
              </div>
              <div className="col s12 m6 l8">
                <h4 className="flow-text mb-ss right">Application Form</h4>
                <form onSubmit={handleSubmit}>
                  <input
                    name="name"
                    value={name}
                    type="text"
                    placeholder="Name"
                    required
                    onChange={handleChange}
                  />
                  <input
                    name="email"
                    value={email}
                    type="email"
                    placeholder="Email"
                    required
                    onChange={handleChange}
                  />
                  <textarea
                    name="text"
                    value={text}
                    type="text"
                    placeholder="Subject"
                    required
                    onChange={handleChange}
                    className="textarea"
                  />
                  <div className="right">
                    <button
                      className="btn-large waves-effect waves-light  red accent-3"
                      type="submit"
                      name="action"
                      style={{
                        color: `#fff`,
                        width: `180px`,
                        fontWeight: `500`,
                        marginTop: `30px`,
                      }}
                    >
                      Apply
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default RecruitContactPage;

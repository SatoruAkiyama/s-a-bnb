import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import "./SearchBox.scss";

const SearchBox = () => {
  const [formInfo, setWhere] = useState({
    where: "",
    checkIn: "",
    checkOut: "",
    guests: 0,
  });

  const { where, checkIn, checkOut, guests } = formInfo;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setWhere({
      ...formInfo,
      [name]: value,
    });
  };

  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    history.push(`/search/${where}`);
  };

  return (
    <div className="search-box col s12 m4">
      <h2 className="main-header-text">
        Book unique places to stay and things to do.
      </h2>
      <form onSubmit={handleSubmit} className="search-box-form">
        <div className="col s12 m12">
          <div className="form-label">Where</div>
          <div className="input-field" id="where">
            <input
              type="text"
              onChange={handleChange}
              placeholder="Anywhere"
              value={where}
              name="where"
              required
            />
          </div>
        </div>
        <div className="col s6">
          <div className="form-label">CHECK-IN</div>
          <div className="input-field" id="check-in">
            <input
              type="date"
              onChange={handleChange}
              placeholder="CHECK-IN"
              value={checkIn}
              name="checkIn"
            />
          </div>
        </div>
        <div className="col s6 ">
          <div className="form-label">CHECK-OUT</div>
          <div className="input-field" id="check-out">
            <input
              type="date"
              onChange={handleChange}
              placeholder="CHECK-OUT"
              value={checkOut}
              name="checkOut"
            />
          </div>
        </div>
        <div className="col s12 m12">
          <div className="form-label">GUESTS</div>
          <div className="input-field" id="guests">
            <input
              type="number"
              onChange={handleChange}
              placeholder="GUESTS"
              value={guests}
              name="guests"
            />
          </div>
          <div className="col m12 submit-btn right">
            <div className="input-field" id="submit-btn">
              <button
                className="btn-large waves-effect waves-light  red accent-3"
                type="submit"
                name="action"
                style={{ color: `#fff`, width: `180px`, fontWeight: `500` }}
              >
                Search
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SearchBox;

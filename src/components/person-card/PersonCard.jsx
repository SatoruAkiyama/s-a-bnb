import React from "react";
import { withRouter } from "react-router-dom";

import { getPeopleData } from "../../data/peopleData";

const PersonCard = ({ match }) => {
  const person = getPeopleData(match.params.venueId);
  const { name, imageUrl, country, languages } = person;
  return (
    <>
      <div className="min">
        <div className="card">
          <div className="card-image">
            <img src={imageUrl} alt="" />
          </div>
          <div className="card-content">
            <p>
              Hello, my name is {name}. I am from {country}. I can speak{" "}
              {languages}.<br /> I am happy if you stay at my place and get a
              wonderful day!
            </p>
          </div>
        </div>
      </div>
      <div className="large">
        <div className="card horizontal">
          <div className="card-image">
            <img src={imageUrl} alt="" />
          </div>
          <div className="card-stacked">
            <div className="card-content">
              <p>
                Hello, my name is {name}. I am from {country}. I can speak{" "}
                {languages}.<br /> I am happy if you stay at my place and get a
                wonderful day!
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default withRouter(PersonCard);

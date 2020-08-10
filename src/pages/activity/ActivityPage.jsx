import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";

import Activities from "../../components/activities/Activities";
import Spinner from "../../components/spinner/Spinner";
import Footer from "../../components/footer/Footer";

import { selectActivities } from "../../redux/main-data/mainDataSelector";

const ActivityPage = ({ match }) => {
  const activities = useSelector(selectActivities);

  const [activity, setActivity] = useState({});
  const [waiting, setWaiting] = useState(true);

  const url = `${window.apiHost}/activity/${match.params.activityId}`;
  useEffect(() => {
    const getData = async () => {
      const res = await axios.get(url);
      await setActivity(res.data);
      setWaiting(false);
    };
    getData();
    return () => setWaiting(true);
  }, [url]);

  if (waiting) {
    return <Spinner />;
  }
  return (
    <>
      <div
        className="activity-page container fade-in mb-s"
        style={{ marginTop: `60px` }}
      >
        <h1 className="main-header-text">{activity.title}</h1>
        <div className="row">
          <div className="col s12 m4 l6 mb-s">
            <img
              src={activity.image}
              alt=""
              style={{ height: `auto`, width: `100%` }}
            />
          </div>
          <div className="col s12 m8 l6">
            <div className="activity__types mb-ss">
              <div
                className="activity__category mb-ss"
                style={{ fontWeight: `500` }}
              >
                Activity Type
              </div>
              <span>{activity.activityType}</span>
            </div>
            <div className="activity__types mb-ss">
              <div
                className="activity__category mb-ss"
                style={{ fontWeight: `500` }}
              >
                Cost
              </div>
              <span>From ${activity.cost}/person</span>
            </div>
            <div className="activity__types mb-ss">
              <div
                className="activity__category mb-ss"
                style={{ fontWeight: `500` }}
              >
                Rating
              </div>
              <span>
                <i
                  className="material-icons"
                  style={{ fontSize: `14px`, color: `red` }}
                >
                  star
                </i>
                {activity.rating} ({activity.totalRatings})
              </span>
            </div>
            <div className="activity__types mb-ss">
              <div
                className="activity__category mb-ss"
                style={{ fontWeight: `500` }}
              >
                Duration
              </div>
              <span>{activity.duration}</span>
            </div>
            <div className="activity__types mb-ss">
              <div
                className="activity__category mb-ss"
                style={{ fontWeight: `500` }}
              >
                Group Size
              </div>
              <span>{activity.groupSize} people</span>
            </div>
            <div className="activity__types mb-ss">
              <div
                className="activity__category mb-ss"
                style={{ fontWeight: `500` }}
              >
                Description
              </div>
              <span>{activity.description}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="container fade-in-delay">
        <div className="container-fluid lower-fold">
          <div className="row">
            <div className="col s12 mb-ll">
              <Activities activities={activities} text="Popular Activities" />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ActivityPage;

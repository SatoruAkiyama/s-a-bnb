import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";

const Comment = ({ match }) => {
  const [comment, setComment] = useState(null);
  //   const location = useHistory();
  useEffect(() => {
    const getComment = async () => {
      const res = await axios.get(
        `https://fir-a-bnb.firebaseio.com/comment${match.params.venueId}.json`
      );
      setComment(res.data);
    };

    getComment();
  }, [match.params.venueId]);

  let commentArray;

  if (comment) {
    commentArray = Object.keys(comment).map((key) => comment[key]);
  }

  if (!comment) {
    return (
      <div className="comment">
        <h1 className="main-header-text">Comment</h1>
        <p>There are not any comment yet.</p>
      </div>
    );
  }

  return (
    <div className="comment">
      <h1 className="main-header-text">Comment</h1>
      <div
        style={{
          display: `flex`,
          flexDirection: `column`,
          flexFlow: `column-reverse`,
        }}
      >
        {commentArray.map((arry, i) => (
          <div className="row" key={i}>
            <div className="col s12 m8">
              <div className="card">
                <div className="card-content">
                  <span className="card-title">{arry.name}</span>
                  <span>{arry.date}</span>
                  <p>{arry.comment}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default withRouter(Comment);

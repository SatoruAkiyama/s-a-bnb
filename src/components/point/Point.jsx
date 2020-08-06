import React from "react";

const Point = ({ pointsDesc, point }) => {
  const descObj = pointsDesc.find(
    (pointDesc) => pointDesc.pointTitle === point
  );

  return (
    <div>
      <div className="point-title">{point}</div>
      <div className="point-desc">{descObj.text}</div>
    </div>
  );
};

export default Point;

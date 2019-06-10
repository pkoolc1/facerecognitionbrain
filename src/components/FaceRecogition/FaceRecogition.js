import React from "react";

const FaceRecogition = ({ imageUrl }) => {
  return (
    <div className="center ma">
      <div className="absolute mt2">
        <img src={imageUrl} width="300px" height="auto" alt="" />
      </div>
    </div>
  );
};

export default FaceRecogition;

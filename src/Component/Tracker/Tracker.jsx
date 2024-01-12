import React from "react";
import "./Tracker.css";
export const Tracker = () => {
  return (
    <>
      <div className="tracker">
        <img src="/photoGallery/trackData.jpg" alt="img" className="trackData" />
        <div className="trackDatatxt">
          <h2>
            Track your child’s progress and watch their communication soar.
          </h2>
          <span>
            Your child’s custom care plan includes goals that are measured each
            week as they get closer to graduation.
          </span>
          <button className="getstarted">Get Started</button>
        </div>
      </div>
    </>
  );
};

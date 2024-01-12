import React from "react";
import "./Banner.css";
export const Banner = () => {
  return (
    <>
      <div className="banner">
        <div className="firstPart">
          <p className="frstPart-head">Help your child share who they are with the world</p>
          <p className="frstPart-head-dis">
            Partner with a speech therapist for live, one-on-one online sessions
            and receive around-the-clock support.
          </p>
          <button className="frstPart-button">Get Started</button>
        </div>

        <img src="./photoGallery/girl.jpg" alt="" className="secondPart" />
      </div>
    </>
  );
};

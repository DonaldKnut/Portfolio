import React from "react";
import images from "../../assets/images";
import "./Stack.css";

const Stack = () => {
  return (
    <div>
      <div className="stacks-wrapper">
        <div className="stack">
          <img src={images.htmlImage} alt="" className="stack-icon" />
        </div>
        <div className="stack">
          <img src={images.cssIcon} alt="" className="stack-icon" />
        </div>
        <div className="stack">
          <img src={images.JSImage} alt="" className="stack-icon" />
        </div>
        <div className="stack">
          <img src={images.JavaImage} alt="" className="stack-icon" />
        </div>
        <div className="stack">
          <img src={images.spring} alt="" className="stack-icon" />
        </div>
        <div className="stack">
          <img src={images.firebaseIcon} alt="" className="stack-icon" />
        </div>
        <div className="stack">
          <img src={images.mySQLImage} alt="" className="stack-icon" />
        </div>
        <div className="stack">
          <img src={images.hibernateImage} alt="" className="stack-icon" />
        </div>
        <div className="stack">
          <img src={images.postgresLogo} alt="" className="stack-icon" />
        </div>
        <div className="stack">
          <img src={images.reactIcon} alt="" className="stack-icon" />
        </div>
      </div>
    </div>
  );
};

export default Stack;

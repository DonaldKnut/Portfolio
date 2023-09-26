import React from "react";
import "./Skills.css";

const Skills = ({ imageSource, title, description }) => {
  return (
    <div className="skill-container">
      <img src={imageSource} alt="" className="skill-logo" />
      <h3 data-aos="fade-left" data-aos-duration="1200" className="h3">
        {title}
      </h3>
      <p data-aos="fade-right" data-aos-duration="1200">
        {description}
      </p>
    </div>
  );
};

export default Skills;

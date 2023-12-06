import React from "react";
import data from "../../assets/portfolioData";
import "./Projects";

const Projects = () => {
  return (
    <div className="projects">
      {data?.map((portfolios, index) => {
        <div className="portfolio-wrap">
          <figure>
            <img src={portfolios.imgUrl} alt="" />
          </figure>
        </div>;
      })}
    </div>
  );
};

export default Projects;

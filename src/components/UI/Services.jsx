import React from "react";
import "./Services.css";
import Skills from "./Skills";
import images from "../../assets/images";
import LeftCard from "./LeftCard";

const Services = () => {
  return (
    <>
      <div className="services" id="services">
        <div className="services-container">
          <div>
            <h2 className="wid">What do i do?</h2>
          </div>
          <p className="wid-desc">
            I possesses diverse skill set, including proficiency in RESTful APIs{" "}
            <i className="fa-solid fa-code"></i>, Docker{" "}
            <i className="fa-brands fa-docker"></i>, GitHub{" "}
            <i className="fa-brands fa-github"></i>, and Jira{" "}
            <i className="fa-brands fa-jira"></i>. With experience in Agile
            project management and a strong focus on security and database
            management systems.
          </p>
          <div className="skill-section">
            <Skills
              imageSource={images.backend}
              title="Backend Development"
              description="My expertise spans both the Java ecosystem, where Spring and Servlets power my solutions, and the JavaScript realm, with Node.js enabling me to develop efficient, event-driven applications."
            />
            <Skills
              imageSource={images.frontend}
              title="Frontend Development"
              description="Deep understanding of React and React Native allows me to transform ideas into elegant, cross-platform solutions that engage users and drive results."
            />
            <Skills
              imageSource={images.database}
              title="Database Management"
              description="Specialized in AWS, PostgreSQL, MySQL and NoSQL databases with a track record of architecting and optimizing data systems for maximum efficiency and scalability."
            />
          </div>
          {/* <div className="flex flex-col justify-center sm:py-12">
            <div className="w-full py-3 px-2 sm:max-w-xl sm:mx-auto sm:px-0">
              <div className="relative text-gray-700 antialiased text-sm font-semibold">
                <div className="hidden absolute w-1 sm:block bg-white-300 h-full left-1/2 transform -translate-x-1/2 ">
                  <LeftCard />
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default Services;

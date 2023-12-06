import React, { useState, useEffect } from "react";
import "./Portfolio.css";
import data from "../../assets/portfolioData"; // Update the import path
import "./Projects.css"; // Make sure to import your CSS file for Projects
import Modal from "./Modal";

const Portfolio = () => {
  const [nextItems, setNextItems] = useState(6);
  const [portfolios, setPortfolios] = useState(data);
  const [selectTab, setSelectTab] = useState("all");
  const [showModal, setShowModal] = useState(false);
  const [activeID, setActiveID] = useState(null);

  useEffect(() => {
    if (selectTab == "all") {
      setPortfolios(data);
    }
    if (selectTab == "web-development") {
      const filtereData = data.filter(
        (item) => item.category == "web-development"
      );
      setPortfolios(filtereData);
    }
    if (selectTab == "ui-design") {
      const filtereData = data.filter((item) => item.category == "ui-design");
      setPortfolios(filtereData);
    }
  }, [selectTab]);

  const showModalHandler = (id) => {
    setShowModal(true);
    setActiveID(id);
  };

  const loadMoreHandler = () => {
    setNextItems((prev) => prev + 3);
  };
  return (
    <section id="portfolio">
      <div className="container">
        <div className="project-section">
          <div>
            <h3>My Recent Projects</h3>
          </div>
          <div>
            <button onClick={() => setSelectTab("all")} className="btn">
              All <i className="fa-solid fa-list-ol"></i>
            </button>
            <button
              className="btn"
              onClick={() => setSelectTab("web-development")}
            >
              Web Development <i className="fa-solid fa-code"></i>
            </button>
            <button className="btn" onClick={() => setSelectTab("ui-design")}>
              UI Design <i className="fa-solid fa-window-restore"></i>
            </button>
          </div>
        </div>
      </div>
      <div className="projects">
        {portfolios?.slice(0, nextItems)?.map((portfolio, index) => (
          <div
            // data-aos="fade-zoom-in"
            // data-aos-delay="20"
            // data-aos-duration="1000"
            className="portfolio-wrap"
            key={index}
          >
            <figure>
              <img src={portfolio.imgUrl} alt="" />
            </figure>

            <div className="projects-bg">
              <div>
                <button
                  onClick={() => showModalHandler(portfolio.id)}
                  className="small-btn"
                >
                  See Details <i className="fa-solid fa-circle-info"></i>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div>
        {nextItems < portfolios.length && data.length > 6 && (
          <button className="btn btn-two" onClick={loadMoreHandler}>
            Load More <i class="fa-solid fa-arrow-rotate-right"></i>
          </button>
        )}
      </div>
      {showModal && <Modal setShowModal={setShowModal} activeID={activeID} />}
    </section>
  );
};

export default Portfolio;

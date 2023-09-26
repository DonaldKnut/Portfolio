import React from "react";
import portfolios from "../../assets/portfolioData";
import Portfolio from "./Portfolio";
import "./Modal.css";

const Modal = ({ activeID, setShowModal }) => {
  const portfolio = portfolios.find((portfolio) => portfolio.id === activeID);

  return (
    <div className="modal">
      <div className="modal-content">
        <figure>
          <img src={portfolio.imgUrl} alt={portfolio.title} />
        </figure>
        <div className="modal-text">
          <h2>{portfolio.title}</h2>
          <p>{portfolio.description}</p>
          <div className="tech-wrap">
            <h4>Technologies:</h4>
            {portfolio.technologies.map((tech, index) => (
              <p key={index} className="tech-label">
                {tech === "React" && <i className="fa-brands fa-react"></i>}
                {tech === "CSS3" && <i className="fa-brands fa-css3-alt"></i>}
                {tech === "Node" && <i className="fa-brands fa-node"></i>}
                {tech === "Database" && (
                  <i className="fa-solid fa-database"></i>
                )}
                {tech}
              </p>
            ))}
          </div>
        </div>
        <a href={portfolios.imgUrl}>
          <button className="btn">
            Live Site <i class="fa-solid fa-earth-africa"></i>
          </button>
        </a>

        <button className="close-icon" onClick={() => setShowModal(false)}>
          &times;
        </button>
      </div>
    </div>
  );
};

export default Modal;

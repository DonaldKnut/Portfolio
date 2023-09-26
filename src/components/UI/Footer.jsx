import React from "react";
import "./Footer.css";
import images from "../../assets/images";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-wrapper">
        <div className="footer-content">
          <div className="nav_logo">
            <img src={images.ibrahimOpeniyiIcon} alt="" className="logo" />
          </div>
          <div
            className="follow-handle"
            data-aos="fade-up"
            data-aos-duration="1800"
            data-aos-delay="200"
          >
            <span className="social-icon">
              <a href="#">
                <i class="fa-brands fa-github"></i>
              </a>
            </span>
            <span className="social-icon">
              <a href="#">
                <i class="fa-brands fa-instagram"></i>n
              </a>
            </span>
            <span className="social-icon">
              <a href="#">
                <i class="fa-brands fa-square-x-twitter"></i>
              </a>
            </span>
            <span className="social-icon">
              <a href="#">
                <i class="fa-brands fa-medium"></i>
              </a>
            </span>
          </div>
          <div className="footer-bottom">
            <p>
              &copy; {new Date().getFullYear()} Ibrahim Openiyi. All Rights
              Reserved.
            </p>
          </div>
        </div>
        <ul className="nav-list">
          <p>Company</p>
          <li className="nav-item">
            <a href="#about-us">About Us</a>
          </li>
          <li className="nav-item">
            <a href="#blog">Blog</a>
          </li>
          <li className="nav-item">
            <a href="#contact-us">Contact Us</a>
          </li>
          <li className="nav-item">
            <a href="#testimonials">Testimonials</a>
          </li>
        </ul>
        <ul className="nav-list">
          <p>Support</p>
          <li className="nav-item">
            <a href="#about-us">Help Center</a>
          </li>
          <li className="nav-item">
            <a href="#blog">Terms of Service</a>
          </li>
          <li className="nav-item">
            <a href="#contact-us">Legal</a>
          </li>
          <li className="nav-item">
            <a href="#testimonials">Privacy policy</a>
          </li>
        </ul>

        <div className="subscribe">
          <label htmlFor="search">Stay up to date</label>
          <div className="input-with-icon">
            <input type="text" placeholder="Email address" />
            <i className="fa-solid fa-paper-plane"></i>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

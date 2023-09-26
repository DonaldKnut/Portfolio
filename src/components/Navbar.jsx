import React, { useRef, useEffect } from "react";
import images from "../assets/images";
import "./Navbar.css";

const Navbar = () => {
  const headerRef = useRef(null);
  const menuRef = useRef(null);

  const stickyHeaderFunc = () => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef.current.classList.add("sticky_header");
      } else {
        headerRef.current.classList.remove("sticky_header");
      }
    });
  };

  useEffect(() => {
    stickyHeaderFunc();
    return window.removeEventListener("scroll", stickyHeaderFunc);
  }, []);

  const handleClick = (e) => {
    e.preventDefault();

    const targetAttr = e.target.getAttribute("href");
    const location = document.querySelector(targetAttr).offsetTop;

    window.scrollTo({
      top: location - 80,
      left: 0,
    });
  };

  const toggleMenu = () => menuRef.current.classList.toggle("show_menu");

  return (
    <div ref={headerRef}>
      <div className="header">
        <div className="nav_logo">
          <img src={images.ibrahimOpeniyiIcon} alt="" className="logo" />
        </div>
        {/* { menu right} */}
        <div className="menu" onClick={toggleMenu} ref={menuRef}>
          <ul className="menu_list-items">
            <li>
              <i class="fa-solid fa-circle-info"></i>
              <a href="#about" onClick={handleClick}>
                About
              </a>
            </li>
            <li>
              <i className="fa-solid fa-user-shield"></i>
              <a onClick={handleClick} href="#services">
                Services
              </a>
            </li>
            <li>
              {/* <i class="fa-solid fa-screwdriver-wrench"></i> */}
              <i className="fa-solid fa-suitcase"></i>
              <a href="#portfolio" onClick={handleClick}>
                Portfolio
              </a>
            </li>
            <li>
              <i class="fa-solid fa-address-book"></i>
              <a href="#contact" onClick={handleClick}>
                Contact
              </a>
            </li>
          </ul>
        </div>
        {/* { menu left } */}
        {/* <div className="btn-wrapper">
          <div className="menu-end"></div>
        </div> */}
        <button className="custom-button">
          Hire Me
          <i className="fa-brands fa-telegram"></i>
        </button>
        <span className="sec-nav" onClick={toggleMenu}>
          <i class="fa-solid fa-bars hamburger-menu"></i>
        </span>
      </div>
    </div>
  );
};

export default Navbar;

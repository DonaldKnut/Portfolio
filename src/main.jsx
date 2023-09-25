import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
// import "aos/dist/aos.js";
import "aos/dist/aos.css"; // Import the AOS CSS
import AOS from "aos"; // Import the AOS library
import "aos/dist/aos.css";
// Import AOS CSS
import "/Users/user/Desktop/ibrah-portfolio/portfolio/src/components/fontawesome.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

AOS.init(); // Initialize AOS

import React from "react";
import "./NavTabs.css";

// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
export default function  NavTabs({ currentPage, handlePageChange }) {
  return (
    <div className="NavTab-container">
            <p className="app-header-title">Shawn Thomas</p>
      <ul className="nav nav-tabs sticky-md-top">
        <div className="nav-items nav">

        {/* <li className="nav-item">
          <a
            href="#home"
            onClick={() => handlePageChange("Shawn Thomas")}
            // This is a conditional (ternary) operator that checks to see if the current page is "Home"
            // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
            className={currentPage === "Home" ? "nav-link active" : "nav-link"}
          >
            Home
          </a>
        </li> */}
        <li className="nav-item">
          <a
            href="#home"
            onClick={() => handlePageChange("About Me")}
            // Check to see if the currentPage is `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
            className={
              currentPage === "About Me" ? "nav-link active" : "nav-link"
            }
          >
            About Me
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#portfolio"
            onClick={() => handlePageChange("Portfolio")}
            // Check to see if the currentPage is `Portfolio`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
            className={
              currentPage === "Portfolio" ? "nav-link active" : "nav-link"
            }
          >
            Portfolio
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#blog"
            onClick={() => handlePageChange("Blog")}
            // Check to see if the currentPage is `Blog`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
            className={currentPage === "Blog" ? "nav-link active" : "nav-link"}
          >
            Blog
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#contact"
            onClick={() => handlePageChange("Contact")}
            // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
            className={
              currentPage === "Contact" ? "nav-link active" : "nav-link"
            }
          >
            Contact
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#resume"
            onClick={() => handlePageChange("Resume")}
            // Check to see if the currentPage is `Resume`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
            className={
              currentPage === "Resume" ? "nav-link active" : "nav-link"
            }
          >
            Resume
          </a>
        </li>
        </div>
      </ul>
    </div>
  );
}



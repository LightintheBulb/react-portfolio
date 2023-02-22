import React from "react";
import './Footer.css';

// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
export default function Footer() {
  return (
    <footer>
      <div className="footer-container px-5 container-fluid fixed-bottom">
      <ul className="nav social-links d-flex col-12 justify-content-center">
        <li className="social-item">
          <a href="https://www.linkedin.com/in/shawn-t-561b94215" target="_blank" rel="noreferrer"><i className="fa-brands fa-linkedin fa-xl px-3"></i></a>
        </li>
        <li className="social-item">
          <a href="https://github.com/LightintheBulb" target="_blank" rel="noreferrer"><i className="fa-brands fa-github fa-xl px-3"></i></a>
        </li>
        <li className="social-item">
          <a href="https://medium.com/@s.thoma1116" target= "_blank" rel="noreferrer"><i className="fa-brands fa-medium fa-xl px-3"></i></a>
        </li>
        <li className="social-item">
          <a href="https://twitter.com/ShawncThomas" target= "_blank" rel="noreferrer" ><i className="fa-brands fa-twitter fa-xl px-3"></i></a>
        </li>
        <li className="social-item">
          <a href="https://www.instagram.com" target= "_blank" rel="noreferrer" ><i className="fa-brands fa-instagram fa-xl px-3"></i></a>
        </li>
      </ul>
      <p className="copywrite-info">{}</p>
      </div>
    </footer>
  );
}
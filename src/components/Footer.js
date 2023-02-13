import React from "react";

// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
export default function Footer() {
  return (
    <footer>
      <ul className="nav social-links">
        <li className="social-item">
          <a href="https://www.linkedin.com/in/shawn-t-561b94215" target="_blank" rel="noreferrer">Linkedin</a>
        </li>
        <li className="social-item">
          <a href="https://github.com/LightintheBulb" target="_blank" rel="noreferrer">GitHub</a>
        </li>
        <li className="social-item">
          <a href="https://medium.com/@s.thoma1116" target= "_blank" rel="noreferrer">Medium</a>
        </li>
        <li className="social-item">
          <a href="https://twitter.com/ShawncThomas" target= "_blank" rel="noreferrer" >Twitter</a>
        </li>
        <li className="social-item">
          <a href="https://www.instagram.com" target= "_blank" rel="noreferrer" >Instagram</a>
        </li>
      </ul>
    </footer>
  );
}
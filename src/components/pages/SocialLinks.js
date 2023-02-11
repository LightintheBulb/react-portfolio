import React from 'react';

// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
export default function SocialLinks() {
  return (
    <footer>
    <ul className="nav social-links">
      <li className="social-item">
        <a
          href="https://www.linkedin.com/in/shawn-t-561b94215"
        >
          Linkedin
        </a>
      </li>
      <li className="social-item">
        <a
          href="https://github.com/LightintheBulb"
        >
          Github
        </a>
      </li>
      <li className="social-item">
        <a
          href="https://medium.com/@s.thoma1116"
        >
          Medium
        </a>
      </li>
      <li className="social-item">
        <a
          href="https://twitter.com/ShawncThomas"
       >
          Twitter
        </a>
      </li>
      <li className="social-item">
        <a
          href="https://www.instagram.com"
>
          Instagram
        </a>
      </li>
    </ul>
    </footer>   
  );
}
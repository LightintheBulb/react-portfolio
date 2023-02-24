import React from "react";
import "./About.css";
import aboutPhoto from "../assets/aboutPhoto_0001.jpeg";

export default function About() {
  return (
    <div className="container-fluid custom-about-container pb-1">
      <div className="card mx-auto custom-card">
        <div className="card-body">
          <div className="col-sm-6 col-md-2 pr-3 mb-4">
            <figure className="about-figure-image">
              {/* <img src={aboutPhoto} className='profile-pic mx-4 mt-4' alt='Profile Pic 1'/> */}
              <img
                src={aboutPhoto}
                className="profile-pic"
                alt="Profile Pic 1"
              />
              {/* <img src={aboutPhoto} className='img-fluid mb-3 cmb-headshot' alt='Profile Pic 1'/> */}
            </figure>
          </div>
          <div className="card-content mx-4">
            {/* <div className='col-sm-12 col-md-9 mr-2 mb-4'> */}
            <h2 className="card-title mt-4 mb-4">
              <u>About Me</u>
            </h2>
            <hr />
            <p className="about-card-text">
              Hello! My name is Shawn, and I'm a aspiring software developer
              with a passion for building software that solves real-world
              problems. I'm constantly looking for new ways to improve my skills
              so that I am able to make a positive impact.
            </p>
            <p className="about-card-text">
              I have 5 years of experience working with various computer systems
              and software as an systems admin. I'm always eager to learn new
              things. I understand the importance of staying up-to-date with the
              latest developments in the tech industry, and I make a point to
              keep my skills sharp by attending conferences, reading tech blogs,
              and collaborating with other.
            </p>
            <p className="about-card-text">
              I'm a big believer in work-life balance, and I strive to maintain
              a healthy balance between my professional and personal
              pursuits. Outside of coding, I enjoy fishing, sports, and all things
              movies, television, and gaming!
            </p>
            <p className="about-card-text">
              If you're interested in working together or learning more about my
              work, please don't hesitate to reach out me on twitter. If you
              would like to see what I have been working on, check out my
              Github. I look forward to hearing from you!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

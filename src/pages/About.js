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
              <img
                src={aboutPhoto}
                className="profile-pic"
                alt="Profile Pic 1"
              />
            </figure>
          </div>
          <div className="card-content mx-4">
            <h2 className="card-title mt-4 mb-4">
              <u>About Me</u>
            </h2>
            <hr />
            <p className="about-card-text">
              Hello! My name is Shawn, and I'm an aspiring software developer
              with a passion for building software that solves real-world
              problems. I'm constantly looking for new ways to improve my skills
              so that I can make a positive impact.
            </p>
            <p className="about-card-text">
              I have 5 years of experience working with various computer systems
              and software as an IT professional. I'm always eager to learn new
              things. I understand the importance of staying up-to-date with the
              latest developments in the tech industry, and I make a point to
              keep my skills sharp by attending conferences, reading tech blogs,
              and collaborating with others.
            </p>
            <p className="about-card-text">
              I'm a big believer in work-life balance, and I strive to maintain
              a healthy balance between my professional and personal pursuits.
              Other than coding, I enjoy fishing, sports, and all things
              outdoor-related.
            </p>
            <p className="about-card-text">
              If you're interested in working together or learning more about my
              work, please don't hesitate to reach out to me on Twitter. If you
              would like to see what I have been working on, check out my
              GitHub. I look forward to hearing from you!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

import React from "react";
import resumePdf from "../assets/resume.pdf";
import "./resumecomponent.css"

export default function resumeSection() {
  // const resumeLink = "./assets/Resume.pdf";
  return (
    <div className="resume-container">
      <div className="resume-btn-container">
        <a
          className="btn btn-primary download-btn"
          href={resumePdf}
          download={resumePdf}
          role="button"
        >
          {" "}
          <i className="fa-regular fa-file-pdf fa-2xl" />
          Download
        </a>
      </div>
      <div className="resume-header">
        <h2 className="resume-title">Resume</h2>
      </div>
    </div>
  );
}

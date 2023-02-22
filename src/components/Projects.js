import React from "react";
import "./Projects.css";
import quarterArcade from "../assets/quarterArcade.png";
import flycastTripPlanner from "../assets/flycastTripPlanner.png";
import passwordGen from "../assets/passwordGen.png";
import tictactoe from "../assets/tictactoe.png";

export default function Projects() {
  const projectData = [
    {
      id: 1,
      title: "Project 2: Quarter Arcade",
      img: quarterArcade,
      deployLink: "https://quarterarcade.herokuapp.com/login-signup?",
      repoLink: "https://github.com/galegro2022/Arcade-",
    },
    {
      id: 2,
      title: "Project 1: Flycast Trip Planner",
      img: flycastTripPlanner,
      deployLink: "https://zberkley88.github.io/flycast-trip-planner",
      repoLink: "https://zberkley88.github.io/flycast-trip-planner/",
    },
    {
      id: 3,
      title: "Password Generator",
      img: passwordGen,
      deployLink: "https://github.com",
      repoLink: "https://github.com",
    },
    {
      id: 4,
      title: "Tic Tac Toe",
      img: tictactoe,
      deployLink: "https://github.com",
      repoLink: "https://github.com",
    },
  ];
  return (
    <div className="d-flex justify-content-around flex-wrap">
      {projectData.map((project) => {
        return (
          <>
            <div className="overlay"></div>
            <div
              className="projects"
              style={{ backgroundImage: `url(${project.img})` }}
              key={`${project.title}-${project.id}`}
            >
              <div className="d-flex justify-content-around text-container">
                <p className="project-title-text">
                  <h6>{`${project.title}`}</h6>{" "}
                </p>
              </div>
              <div>
                <p className="project-type-text">{project.type}</p>
              </div>
              <div className="app-links d-flex justify-content-center">
                <a
                  href={project.repoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa-brands fa-github fa-2xl"></i>
                </a>
                <a
                  href={project.deployLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa-regular fa-window-restore fa-2xl"></i>
                </a>
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
}

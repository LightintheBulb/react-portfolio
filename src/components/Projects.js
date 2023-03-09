import React from "react";
import "./Projects.css";
import quarterArcade from "../assets/quarterArcade.png";
import flycastTripPlanner from "../assets/flycastTripPlanner.png";
import passwordGen from "../assets/passwordGen.png";
import noteTaker from "../assets/noteTaker.png";
import getMoving from "../assets/getMoving.png";
import workdayScheduler from "../assets/workdayScheduler.png";

export default function Projects() {
  const projectData = [
    {
      id: 1,
      title: "Get Moving!",
      img: getMoving,
      deployLink: "http://projectthreemern.herokuapp.com/",
      repoLink: "https://github.com/jicard/Project-3-Repo",
    },
    {
      id: 2,
      title: "Quarter Arcade",
      img: quarterArcade,
      deployLink: "https://quarterarcade.herokuapp.com/login-signup?",
      repoLink: "https://github.com/galegro2022/Arcade-",
    },
    {
      id: 3,
      title: "Flycast Trip Planner",
      img: flycastTripPlanner,
      deployLink: "https://zberkley88.github.io/flycast-trip-planner",
      repoLink: "https://zberkley88.github.io/flycast-trip-planner/",
    },
    {
      id: 4,
      title: "Note Taker",
      img: noteTaker,
      deployLink: "https://elastic-adorable-pad.herokuapp.com",
      repoLink: "https://github.com/LightintheBulb/ELASTIC-adorable-PAD",
    },
    {
      id: 6,
      title: "Work Day Scheduler",
      img: workdayScheduler,
      deployLink: "https://lightinthebulb.github.io/work-day-scheduler/",
      repoLink: "https://github.com/LightintheBulb/work-day-scheduler",
    },
    {
      id: 5,
      title: "Password Generator",
      img: passwordGen,
      deployLink: "https://lightinthebulb.github.io/peewee-pswGen",
      repoLink: "https://github.com/LightintheBulb/peewee-pswGen",
    },
  ];
  return (
    <div className="d-flex justify-content-around flex-wrap .project-container">
      {projectData.map((project) => {
        return (
          <>
            <div
              className="projects"
              style={{ backgroundImage: `url(${project.img})` }}
              key={`${project.title}-${project.id}`}
            >
              <div id="project-title-container" className="d-flex justify-content-around text-container">
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
                  <p>Github</p>
                </a>
                <a
                  href={project.deployLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa-regular fa-window-restore fa-2xl"></i>
                  <p>Deployed Site</p>
                </a>
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
}

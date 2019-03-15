import React, { Component } from "react";
// import PROJECTS from "../data/projects";

const PROJECTS = [
  {
    id: 1,
    title: "Example React Application",
    description:
      "A React App that I built, involving JS and core web dev concepts!",
    link: "https://github.com/sirkells/example"
  },
  {
    id: 2,
    title: "REST API",
    description: "A REST API that I built for the job finder application",
    link: "https://github.com/sirkells/Projecty"
  },
  {
    id: 3,
    title: "A Blog Application",
    description:
      "A simple blog application with authentication built with flask",
    link: "https://github.com/sirkells/kongblog"
  }
];
class Project extends Component {
  render() {
    const { title, description, link } = this.props.project;
    return (
      <div style={{ display: "inline-block", width: 300, margin: 10 }}>
        <h3>{title}</h3>
        {/* <img src={image} alt="" style={{ width: 200, height: 120 }} /> */}
        <p>{description}</p>
        <a href={link}>{link}</a>
      </div>
    );
  }
}

class Projects extends Component {
  state = {};
  render() {
    return (
      <div>
        <h2>Highlighted Projects</h2>
        <div>
          {PROJECTS.map(PROJECT => {
            return <Project key={PROJECT.id} project={PROJECT} />;
          })}
        </div>
      </div>
    );
  }
}

export default Projects;

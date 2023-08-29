import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  console.log(projects);

  const project = projects.map(obj=> <ProjectItem 
    key={obj.name}
    name ={obj.name}
    about ={obj.about}
    technologies= {obj.technologies}/>
  )
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">{project}</div>
    </div>
  );
}

export default ProjectList;

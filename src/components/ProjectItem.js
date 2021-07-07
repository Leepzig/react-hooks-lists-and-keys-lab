import React from "react";
import user from "../data/user"
//{ name, about, technologies }
function ProjectItem({props:{ name, about, technologies }}) {
  console.log("This is props", name)
  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
        {technologies.map(element => <span key={element}>{element}</span>)}
      </div>
    </div>
  );
}

export default ProjectItem;

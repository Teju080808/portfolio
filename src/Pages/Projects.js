import React from "react";
import Project from "../Components/Project";
import { projectDetails } from "../Details";

function Projects() {
  return (
    <main className="bg-dark ">
      <section className="projects-section ">
        <h1 className="font-bold text-white text-center p-3">
          Projects
        </h1>
        <div className="container" style={{display:"flex",justifyContent:"center",gap:"30px"}}>
          {projectDetails.map(
            ({ id, title, image, description, techstack, previewLink, githubLink }) => (
              <Project
                key={id}
                title={title}
                image={image}
                description={description}
                techstack={techstack}
                previewLink={previewLink}
                githubLink={githubLink}
              />
            )
          )}
        </div>
      </section>
    </main>
  );
}

export default Projects;

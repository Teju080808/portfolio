import React from "react";

function Project({ title, image, description, techstack, previewLink, githubLink }) {
  return (
    <article className="project-card bg-light rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-transform transform hover:-translate-y-2" >
      <img src={image} alt={title} className=" h-56 object-cover" />
      <div className="p-5">
        <h2 className="text-xl font-semibold text-dark">{title}</h2>
        <p className="text-dark mt-2">{description}</p>
        <p className="text-dark mt-3 font-medium">
          Tech Stack: <span className="font-light">{techstack}</span>
        </p>
        <div className="flex justify-between mt-4">
          <a  href={previewLink} target="_blank" rel="noreferrer" className="text-dark underline me-5">
            Live Preview
          </a>
          <a href={githubLink} target="_blank" rel="noreferrer" className="text-dark underline">
            View Code
          </a>
        </div>
      </div>
    </article>
  );
}

export default Project;

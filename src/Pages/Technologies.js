import React from "react";
import { techStackDetails } from "../Details";

function Technologies() {
  const { html, css, js, react, bootstrap, vscode, github } = techStackDetails;

  return (
    <main className="bg-dark text-white">
      <section className="max-w-3xl mx-auto mb-12 text-center p-3" >
        <h1 className="font-bold mb-4">Tech Stack</h1>
        <p className="text-gray-300">
          Technologies I've been working with recently
        </p>
      </section>

      <section className="p-5" style={{display:"flex",justifyContent:"center",gap:"50px"}}>
        {[html, css, js, react, bootstrap].map((tech, idx) => (
          <img
            key={idx}
            src={tech}
            alt=""
            title=""
            className="w-20 h-20 object-contain hover:scale-110 transition-transform"
          />
        ))}
      </section>

      <section className="max-w-3xl mx-auto mb-6 text-center">
        <h1 className="text-3xl md:text-4xl xl:text-5xl font-bold mb-4">Tools</h1>
      </section>

      {/* Tools Images - aju bajju */}
      <section className="p-5" style={{display:"flex",justifyContent:"center", gap:"50px"}}>
        {[vscode, github].map((tool, idx) => (
          <img
            key={idx}
            src={tool}
            alt=""
            title=""
            className="w-20 h-20 object-contain hover:scale-110 transition-transform"
          />
        ))}
      </section>
    </main>
  );
}

export default Technologies;

import React from "react";
import Work from "../Components/Work";
import { personalDetails, eduDetails } from "../Details";

function About() {
  return (
    <main className="bg-dark text-white min-h-screen py-12 p-3">
      <section className="max-w-3xl mx-auto p-5">
        <h1 className="text-3xl md:text-4xl xl:text-5xl font-bold mb-6 text-center">
          About Me
        </h1>
        <p className="text-gray-300 leading-relaxed">{personalDetails.about}</p>
      </section>

      <section className="max-w-3xl mx-auto p-3">
        <h1 className="text-3xl md:text-4xl xl:text-5xl font-bold mb-6 text-center">
          Education
        </h1>
        <div className="space-y-6">
          {eduDetails.map(({ Position, Company, Location }, index) => (
            <Work
              key={index}
              position={Position}
              company={Company}
              location={Location}
            />
          ))}
        </div>
      </section>
    </main>
  );
}

export default About;

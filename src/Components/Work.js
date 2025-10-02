import React from "react";

function Work({ position, company, location }) {
  return (
    <div className="bg-gray-900 rounded-xl p-5 shadow-lg hover:shadow-2xl transition-transform transform hover:-translate-y-1">
      <h2 className="text-xl font-semibold text-white">{position}</h2>
      <p className="text-gray-400 mt-1">{company}</p>
      <p className="text-gray-500 mt-1">{location}</p>
    </div>
  );
}

export default Work;

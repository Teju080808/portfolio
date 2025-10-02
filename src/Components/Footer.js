import React from "react";
import "../index.css"; // CSS ka correct path (src/index.css)

function Footer() {
  return (
    <footer className="footer bg-dark">
      <p className="text-xs text-center text-dark-content w-full">
        Designed and Coded by{" "}
        <a
          className="text-gradient"
          href="https://pavanmg.in"
          target="_blank"
          rel="noreferrer noopener"
        >
          Tejal Purabiya
        </a>
      </p>
    </footer>
  );
}

export default Footer;

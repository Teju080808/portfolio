import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { socialMediaUrl } from "../Details";
import "../index.css"; // CSS import
import TwitterIcon from "../assets/twitter.svg";
import LinkedinIcon from "../assets/linkedin.svg";
import GithubIcon from "../assets/github.svg";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { linkdein, github, twitter } = socialMediaUrl;
  const toggleClass = () => setIsOpen(!isOpen);

  return (
    <header className="header header-md-flex bg-dark pt-3">
      <div className="flex justify-between items-center">
      </div>

      <nav className={`nav ${!isOpen ? "hidden" : ""} md-flex`}>
        <ul style={{listStyle:"none",padding:"0",margin:"0"}}>
          <li><NavLink to="/" className="nav-link text-light" onClick={toggleClass}>Home</NavLink></li>
          <li><NavLink to="/about" className="nav-link text-light" onClick={toggleClass}>About</NavLink></li>
          <li><NavLink to="/technologies" className="nav-link text-light" onClick={toggleClass}>Technologies</NavLink></li>
          <li><NavLink to="/projects" className="nav-link text-light" onClick={toggleClass}>Projects</NavLink></li>
          <li><NavLink to="/contact" className="nav-link text-light" onClick={toggleClass}>Contact</NavLink></li>
        </ul>

        <ul className="">
          <li>
            <a href={twitter} target="_blank" rel="noreferrer noopener">
              <img src={TwitterIcon} alt="Twitter" className="nav-link text-light w-6 h-6" />
            </a>
          </li>
          <li>
            <a href={linkdein} target="_blank" rel="noreferrer noopener">
              <img src={LinkedinIcon} alt="LinkedIn" className="nav-link text-light w-6 h-6" />
            </a>
          </li>
          <li>
            <a href={github} target="_blank" rel="noreferrer noopener">
              <img src={GithubIcon} alt="Github" className=" nav-link text-light w-6 h-6" />
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;

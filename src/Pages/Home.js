import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { personalDetails } from "../Details";
import "../index.css"; // CSS import

function Home() {
  const { name, tagline, img } = personalDetails;
  const h11 = useRef();
  const h12 = useRef();
  const h13 = useRef();
  const myimageref = useRef();

  useEffect(() => {
    const tl = gsap.timeline();
    tl.from(h11.current, { x: "-100%", delay: 0.8, opacity: 0, duration: 2, ease: "Power3.easeOut" }, "<")
      .from(h12.current, { x: "-100%", delay: 0.5, opacity: 0, duration: 2, ease: "Power3.easeOut" }, "<")
      .from(h13.current, { x: "-100%", delay: 0.1, opacity: 0, duration: 2, ease: "Power3.easeOut" }, "<")
      .from(myimageref.current, { x: "200%", delay: 0.5, opacity: 0, duration: 2, ease: "Power3.easeOut" }, "<");
  }, []);

  return (
    <main className="home-container bg-dark text-light">
      <div>
        <h1 ref={h11} className="home-heading">
          Hi,👋<br />My Name is<br />
        </h1>
        <h1 ref={h12} className="name-gradient">
          {name}
        </h1>
        <h2 ref={h13} className="home-heading">
          {tagline}
        </h2>
      </div>
      <div className="home-image">
        <img ref={myimageref} src={img} alt={name} />
      </div>
    </main>
  );
}

export default Home;

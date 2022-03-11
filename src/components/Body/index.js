import React, { useRef } from "react";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Content from "../Content";
import About from "../About";

const Body = () => {
  const mainBody = useRef();
  const top = useRef();

  const handleExplore = (e) => {
    e.preventDefault();
    mainBody.current.scrollIntoView({ behaviour: "smooth" });
  };

  const handleTop = (e) => {
    e.preventDefault();
    top.current.scrollIntoView({ behaviour: "smooth" });
  };
  return (
    <>
      <header ref={top}>
        <h1>Hi I'm Ron, I'm a full stack developer.</h1>
        <button id="explore" onClick={handleExplore}>
          Explore
        </button>
      </header>
      <article className="mainBody" ref={mainBody}>
        <div>
          <About />
          <Content />
        </div>
      </article>
      <div>
        <button className="top" onClick={handleTop}>
          <FontAwesomeIcon icon="fa-solid fa-chevron-up" />
        </button>
      </div>
    </>
  );
};
export default Body;

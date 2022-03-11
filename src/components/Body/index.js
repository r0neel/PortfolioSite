import React, { useRef } from "react";
import "./style.css";

const Body = () => {
  const mainBody = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    mainBody.current.scrollIntoView({ behaviour: "smooth" });
  };
  return (
    <>
      <header>
        <h1>Hi I'm Ron, I'm a full stack developer.</h1>
        <button id="explore" onClick={handleSubmit}>
          Explore
        </button>
      </header>
      <section className="mainBody" ref={mainBody}>
        <div>
          <p>{"<<<<<<<<<<<< UNDER CONSTRUCTION >>>>>>>>>>>>"}</p>
        </div>
      </section>
    </>
  );
};
export default Body;

import React, { useRef } from "react";
import "./style.css";
import Body from "../Body";

const Header = () => {
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
      <section ref={mainBody}>
        <Body />
      </section>
    </>
  );
};
export default Header;

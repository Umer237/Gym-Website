import React from "react";
import "./Section11.css";
import girl1 from "./Images/girl.jpg";
import man1 from "./Images/man.jpg";
const Section11 = () => {
  return (
    <>
      <div className="Section-11-Flex">
        <div className="Side-Text">
          <h2>TESTIMONIALS</h2>
          <h1>What Our Clients Say About Us</h1>
          <p>
            The sky was cloudless and of a deep dark blue. The spectacle before
            us was indeed sublime.
          </p>
        </div>
        <div className="Section-1">
          <div className="Section-1-Text">
            <img className="Person-1" src={man1} alt="" />
            <h2>Ekene Obasey </h2>
            <p>
          Formed a great hindrance to my speed resolved contary to my first.
            </p>
          </div>
        </div>
        <div className="Section-2">
          <div>
            <img className="Person-2" src={girl1} alt="" />
            <h2>Sanee Viscal</h2>
          </div>
          <p>Formed a great hindrance to my speed resolved contary to my first.
          </p>
        </div>
      </div>
    </>
  );
};

export default Section11;

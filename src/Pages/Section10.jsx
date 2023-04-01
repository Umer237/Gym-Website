import React from "react";
import "./Section10.css";
import Yoga from "./Images/DoingYoga.jpg";
import Women from "./Images/Women.jpg";
import Women2 from "./Images/Women2.jpg";
import Man1 from "./Images/ManLifting2.jpg";
import Man2 from "./Images/MenLifting.webp";
import Man3 from "./Images/Man5.webp";

const Section10 = () => {
  return (
    <>
      <div className="Section-10-Text">
        <h2>GYM GALLERY</h2>
        <h1>Become Stronger and more Energetic</h1>
        <p>
          The sky was cloudless and of a deep dark blue. The spectacle before us
          was indeed sublime.
        </p>
      </div>
      <div className="Btn-Div">
        <button>ALL</button>
        <button>YOGA</button>
        <button>CYCLING</button>
        <button>LIFTING</button>
        <button>FITNESS</button>
      </div>
      <div className="Images-Section">
        <div className="col-1">
          <img className="Image-1" src={Women} alt="" />
        </div>
        <div className="col-1">
          <img className="Image-2" src={Women} alt="" />
        </div>
        <div className="col-1">
          <img className="Image-3" src={Women} alt="" />
        </div>
        <div className="col-1">
          <img className="Image-5" src={Women} alt="" />
        </div>
        <div className="col-1">
          <img className="Image-4" src={Women} alt="" />
        </div>
        <div className="col-1">
          <img className="Image-4" src={Women} alt="" />
        </div>
        <div className="col-1">
          <img className="Image-4" src={Women} alt="" />
        </div>
        <div className="col-1">
          <img className="Image-4" src={Women} alt="" />
        </div>
      </div>
    </>
  );
};

export default Section10;

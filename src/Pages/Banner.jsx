import React from "react";
import "./Banner.css";
import Body from "./Images/BodyBuilder.png";

const Banner = () => {
  return (
    <>
      <div data-aos="fade-right">
        <div className="Banner-Flex">
          <div className="Banner-Text"> 
           <img src={Body} alt="" />
            <h1>
              <span>BISCUP WORKOUT</span>
              <br />
              FITNESS IN OUR GYM
            </h1>
            <p>
              The Sky was cloudless and of a deep dark blue. The spectacle
              before us was indeed sublime
            </p>
            <button>BUY PASS</button>
          
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;

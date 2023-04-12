import React from "react";
import "./Banner.css";

const Banner = () => {
  return (
    <>
      <div data-aos="fade-right">
        <div className="Banner-Flex">
          <div className="Banner-Text"> 
           <img src='https://i.pinimg.com/564x/ba/03/9c/ba039c56f2f1c7e73c97ff3b16e1085d.jpg' />
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

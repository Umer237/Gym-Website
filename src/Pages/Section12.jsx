import React from "react";
import "./Section12.css";

import { BsCircleFill } from "react-icons/bs";

const Section12 = () => {
  return (
    <>
      <div className="Section12-Top-Text">
        <h2>GYM PRICING</h2>
        <h1>Physical Activity is Good</h1>
        <p>
          The sky was cloudless and of a deep dark blue. The spectacle before us
          was indeed sublime.
        </p>
      </div>
      <div className="Section12-Boxes">
        <div className="Section-12-Box-1">
          <div className="Box-1-Top">
            <h2>Basic</h2>
            <h1>$9</h1>
          </div>
          <div>
            <div className="Icon-Flex">
              <BsCircleFill /> <h3>Yoga Class</h3>
            </div>
            <div className="Icon-Flex">
              <BsCircleFill /> <h3>Fitness Training</h3>
            </div>
            <div className="Icon-Flex">
              <BsCircleFill /> <h3>Cycling</h3>
            </div>
            <button>BUY NOW</button>
          </div>
        </div>
        <div className="Section-12-Box-1">
          <div className="Box-1-Top">
            <h2>PRO</h2>
            <h1>$24</h1>
          </div>
          <div>
            <div className="Icon-Flex">
              <BsCircleFill />
              <h3>Yoga Class</h3>
            </div>
            <div className="Icon-Flex">
              <BsCircleFill />
              <h3>Fitness Training</h3>
            </div>
            <div className="Icon-Flex">
              <BsCircleFill />
              <h3>Cycling</h3>
            </div>

            <button>BUY NOW</button>
          </div>
        </div>
        <div className="Section-12-Box-1">
          <div className="Box-1-Top">
            <h2>VIP</h2>
            <h1>$99</h1>
          </div>
          <div className="Icon-Flex">
            <BsCircleFill /> <h3>Yoga Class</h3>
            <div>
              <div className="Icon-Flex">
                <BsCircleFill /> <h3>Fitness Training</h3>
              </div>
              <div className="Icon-Flex">
                <BsCircleFill /> <h3>Cycling</h3>
              </div>
            </div>
            <button>BUY NOW</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Section12;

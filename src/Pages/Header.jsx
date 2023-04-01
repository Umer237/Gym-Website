import React, { useState } from "react";
import "./Header.css";
import { FaFacebookF } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import { HiBars3 } from "react-icons/hi2";
import { ImCross } from "react-icons/im";

const Header = () => {

  return (
    <>
      <div className="header-flex">
        <div className="logo">
          <h1>GYM</h1>
        </div>
        <div>
          <nav className="NavBar">
            <ul

            >
              <li>
                <a href="/">About</a>
              </li>
              <li>
                <a href="/">Classes</a>
              </li>
              <li>
                <a href="/">Blog</a>
              </li>
              <li>
                <a href="/">Contact</a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="Header-Icons">
          <FaFacebookF className="Header-Icon-1" />

          <BsTwitter className="Header-Icon-2" />
        </div>
    
      </div>
    </>
  );
};

export default Header;

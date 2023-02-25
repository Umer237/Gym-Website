import React from 'react'
import './Header.css'
import { FaFacebookF } from "react-icons/fa";
import {BsTwitter } from "react-icons/bs";

const Header = () => {
  return (
   <>
   <div className='Header-Flex'>
    <div>
   <h1>GYM</h1>
   </div>
   <div>
   <ul>
    <li><a href="/">About</a></li>
    <li><a href="/">Classes</a></li>
    <li><a href="/">Blog</a></li>
    <li><a href="/">Contact</a></li>
   </ul>
   </div>
   <div className='Header-Icons'>
   
   <FaFacebookF className='Header-Icon-1'/>
   
   <BsTwitter className='Header-Icon-2'/>
   </div>
   </div>
   </>
  )
}

export default Header
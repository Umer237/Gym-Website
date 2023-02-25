import React from 'react'
import './Section3.css'
import {MdHealthAndSafety } from "react-icons/md";
import {GiMuscularTorso } from "react-icons/gi";
import {GiBrain } from "react-icons/gi";
import {GiShakingHands} from "react-icons/gi";

const Section3 = () => {
  return (
    <>
    <div className="Section-3-Text">
        <h2>GYM FEATURES</h2>
        <h1>Phsyical Activity is Good</h1>
        <p>The sky was cloudless and of a deep dark blue. The spectacle before us was indeed sublime.</p>
    </div>
    <div className="Boxes">
    <div className='Box-1' >
        <MdHealthAndSafety className='Icon-1'/>
          <h3>Health</h3>
          <p>Power to raise and purify our thoughts like a strain of sacred music.</p>
    </div>
    <div className="Box-2">
      <GiMuscularTorso className='Icon-2'/>
      <h3>Confidence</h3>
      <p>Power to raise and purify our thoughts like a strain of sacred music.</p>
    </div>
    <div className="Box-3">
        <GiBrain className='Icon-3'/>
        <h3>Brain Activity</h3>
        <p>Power to raise and purify our thoughts like a strain of sacred music.</p>
    </div>
    <div className="Box-4">
        <GiShakingHands className='Icon-4'/>
        <h3>New Friends</h3>
        <p>Power to raise and purify our thoughts like a strain of sacred music.</p>
    </div>
    </div>
    </>
  )
}

export default Section3
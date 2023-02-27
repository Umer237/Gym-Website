import React from 'react'
import './Section7.css'
import Calc from './Images/Calculate.png'

const Section7 = () => {
  return (
   <>
   <div className="Section-7-Flex">
    <img src={Calc} alt="" />
    <div className="Section-7-Text">
    <h2>CALCULATE</h2>
    <h1>Calculate Your BMI </h1>
    <p>The sky was cloudless and of a deep dark blue. The spectacle before us was indeed sublime.</p>
    <button>CALCULATE</button>
    </div>
   </div>
   </>
  )
}

export default Section7
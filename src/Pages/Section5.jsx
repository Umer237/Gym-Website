import React from 'react'
import './Section5.css'
// import Exercise1 from './Images/Yoga.png'
import Person1 from './Images/Egypt-Women.jpeg'
// import Exercise2 from'./Images/Cycling.png'
import Exercise3 from './Images/Lifting.png'
import Cycling from './Images/Cycling-Machine.png'
import Yoga from './Images/Man-Yoga.png'

const Section5 = () => {
  return (
    <>
    <div className="Section-5-Text">
    <h2>GYM CLASSES</h2>
    <h1>Regular Workouts Improve Cardiac Perfomance</h1>
    <p>The sky was cloudless and of a deep dark blue. The spectacle before us was indeed sublime. </p>
    </div>
    <div className='Section-5-Flex'>
      <div className='Trainer-1'>
     <img className='Exercise2  ' src={Yoga} alt="" />
     <div style={{paddingLeft:'40px'}}>
     <h1>Yoga</h1>
     <div className='Person1-Flex'>
      <img className='Person1' src={Person1} alt="" />
      <p>Lisanne Viscaal</p>
      </div>
      </div>
      </div>
      <div className='Section-3'>
     <img className='Exercise1' src={Cycling} alt="" />
     <div style={{paddingLeft:'40px'}}>
     <h1>Cycling</h1>
     <div className='Person1-Flex'>
      <img className='Person1' src={Person1} alt="" />
      <p>Lisanne Viscaal</p>
      </div>
      </div>
      </div>
      <div className='Section-3'>
     <img className='Exercise1' src={Exercise3} alt="" />
     <div style={{paddingLeft:"40px"}}>
     <h1>Weight Lifting</h1>
     <div className='Person1-Flex'>
      <img className='Person1' src={Person1} alt="" />
      <p>Lisanne Viscaal</p>
      </div>
      </div>
      </div>
    </div>
    </>
  )
}

export default Section5
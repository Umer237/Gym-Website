import React from 'react'
import './Banner.css'
import Body from'./Images/BodyBuilder.png'

const Banner = () => {
  return (
  <>
  <div data-aos="fade-right">
  <div className='Banner-Flex'>
    <div className='Banner-Text'>
   <h1><span>ENJOY</span><br></br> Fitness in our Gym</h1>
   <p>The Sky was cloudless and of a deep dark blue. The spectacle before us was indeed sublime</p> 
    <button>BUY PASS</button>
   </div>
 
   <img src={Body} alt="" />
  </div>
  </div>
  </>
  )
}

export default Banner
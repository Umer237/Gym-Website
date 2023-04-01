import React from 'react'
import './Section2.css'
import Body2 from './Images/BodyBuilder2.png'
const Section2 = () => {
  return (
<>
<div className='Section-2-Flex'>
    <div className='Section-2-Img'>
  <img src={Body2} alt="" />
  </div>
  <div className="Text">
  <h2>ABOUT GYM</h2>
  <h1>Build Your Body with Best Trainers</h1>
  <p>The sky was cloudless and of a deep dark blue. The spectacle before us was indeed sublime. </p>
  <button>EXPLORE</button>
  </div>

</div>
</>
  )
}

export default Section2
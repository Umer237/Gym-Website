import React from 'react'
import './Section2.css'
import Body2 from './Images/BodyBuilder2.png'
import Section2Top from './Section2Top'
import Exersice from './Images/Excersise.png'

const Section2 = () => {
  return (
<>
<Section2Top/>
<div className='Section-2-Flex'>
  <div style={{display:'flex',justifyContent:'center',alignItems:'center',paddingLeft:'100px',textAlign:'center'}}>
    <div className='Section-2-Img'>
  <img src='https://i.pinimg.com/564x/2b/18/68/2b18683a5ca6fafb45fbe82c5230ed62.jpg' alt="" />
  </div>
  <div className="Text">
  <h2>ABOUT GYM</h2>
  <h1>Six Pack in One Week</h1>
  <p>The sky was cloudless and of a deep dark blue. The spectacle before us was indeed sublime. </p>
  <button>EXPLORE</button>
  </div>
  </div>
  <div style={{display:'flex',justifyContent:'center',alignItems:'center',textAlign:'center'}}>
  <div>
  <img className='Exercise1' src='https://i.pinimg.com/564x/b7/97/2a/b7972a636c2b9aeb6b538726e60c7346.jpg' alt="" />
  </div>
  <div className="Text">
  <h2>ABOUT GYM</h2>
  <h1>Biscup in One Week</h1>
  <p>The sky was cloudless and of a deep dark blue. The spectacle before us was indeed sublime. </p>
  <button>EXPLORE</button>
  </div>
  </div>
  
</div>
</>
  )
}

export default Section2
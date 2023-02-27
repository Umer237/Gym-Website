import React from 'react'
import './Section8.css'
import Tr1 from './Images/Tranier2.jpg'
import Tr2 from './Images/Tranier1.jpg'
import Tr3 from './Images/Tranier3.jpg'
import Tr4 from './Images/Tranier4.jpg'

const Section8 = () => {
  return (
 <>
 <div className='Section-8-Background'>
 <div className='Section-8-Text'>
  <h2>GYM TRAINERS</h2>
  <h1>Build Your Body with Best Trainers</h1>
  <p>The sky was cloudless and of a deep dark blue. The spectacle before us was indeed sublime.</p>
 </div>
 <div className='Section-8-Flex'>
    <div>
    <img className='Img-1' src={Tr1} alt="" />
    <h1>Chinaza Akachi</h1>
    <p>Yoga</p>
    </div>
    <div>
    <img className='Img-2' src={Tr2} alt="" />
    <h1>Elon Musk</h1>
    <p>Weight Lifting</p>
    </div>
    <div>
    <img className='Img-3' src={Tr3} alt="" />
     <h1>Dameon Peterson</h1>
     <p>Cycling</p>
     </div>
     <div>
     <img className='Img-4' src={Tr4} alt="" />
     <h1>Steve Johnson</h1>
     <p>Cycling</p>
     </div>
 </div>
 </div>
 </>
  )
}

export default Section8
import React from 'react'
import './Section11.css'
import girl from './Images/girl.jpg'
import man from './Images/man.jpg'
const Section11 = () => {
  return (
<>
<div className="Section-11-Flex">
    <div>
<h2>TESTIMONIALS</h2>
<h1>What Our Clients Say About Us</h1>
<p>The sky was cloudless and of a deep dark blue. The spectacle before us was indeed sublime.</p>
</div>
<div className='Section-1'>
    <div className='Section-1-Text'>
    <img className='Person-1' src={man} alt="" />
    <h2>David Salsa</h2>
    <h3>Park Street, L/k-2, USA</h3>
    </div>
    <p>There are many variations of passages of Lorem ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which slightly believable.</p>
</div>
<div className='Section-2'>
    <div className='Section-2-Text'>
    <img className='Person-2' src={girl} alt="" />
    <h2>Lusia Salsa</h2>
    <h3>Park Street, L/k-2, USA</h3>
    </div>
    <p>There are many variations of passages of Lorem ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which slightly believable.</p>
</div>
</div>
</>
  )
}

export default Section11
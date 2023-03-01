import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
   <>
   <div className='Footer-Flex'>
    <div>
    <h1>GYM</h1>
    <p className='p-1'>
        Sport makes our life more interesting. The number of places where one can go in for sports.   </p>
        </div>
        <div>
        <h2>MENU</h2>
        <p className='p-2'>About</p>
        <p className='p-2'>Classes</p>
        <p className='p-2'>Blog</p>
        <p className='p-2'>Contact</p>
        </div>
        <div>
            <h2>ADDRESS</h2>
            <p className='p-2'>9157 Euclid Dr.</p>
           <p className='p-2'>Rome, NY 13440</p>      
        </div>
   </div>
   </>
  )
}

export default Footer
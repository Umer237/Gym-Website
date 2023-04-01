import React from 'react'
import './Section13.css'

import Workout from './Images/workout.jpg'
import Workout2 from './Images/Dumble.jpg'
import Workout3 from './Images/menworkout.jpg'

const Section13 = () => {
  return (
<>
<div style={{backgroundColor:'#222121'}}>
<div className="Section13-Top-Text">
    <h2>GYM BLOG</h2>
    <h1>Our Latest Articles</h1>
    <p>The sky was cloudless and of a deep dark blue. The spectacle before us
          was indeed sublime.</p>
</div>
<div className="Section13-Flex">
    <div className='Section13-Box-1'>
        <img src={Workout} alt="" />
        <h3>Physical activity a person becomes stronger and more energetic</h3>
    </div>
    <div>
    <div className="Section13-Box-2">
        <img src={Workout2} alt="" />
    <h3>Self-esteem and belief in one own strenght</h3>
    </div>
    <div className='Section13-Box-3'>
        <img src={Workout3} alt="" />
        <h3>Many years ago it was proved that people</h3>
    </div>
</div>
</div>
<div className='Section13-btn'>
    <button>BLOG</button>
</div>
</div>

</>
  )
}

export default Section13
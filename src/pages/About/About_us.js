import React from 'react';
import './about.css';
import stars from '../../img/pexels-alexandre-p-junior-7736104.jpg';
import dhrova from '../../img/Dhruva-Final.png';

export function About_us() {
  return (
    <div>
      
<img src={stars} className='star'/>
<section className='one'>
<p >ABOUT US</p>
<img src={dhrova} className='dhr'/>
<div className='ab'>
<h1>WE ARE A DEDICATED TO ASTRONOMY</h1>
<p>DHRUVA IS A COLLAGE CLUB, WE WORK TOWARD INCREASING<br/>KNOWLEDGE ABOUT SPACE,COSMOS AND EVERYTHING WE ARE <br/>STILL LEARNING ABOUT.WE SHARE AND LEARN TOGETHER</p>
</div>
</section>
    </div>
  )
}

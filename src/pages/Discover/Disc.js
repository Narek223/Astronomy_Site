import React from 'react';
import './disc.css';
import stars_2 from '../../img/photo-1464850598256-dac80286d6ca.jpg';
import site_1 from '../../img/1_1554887961-1024x518.jpg';
import site_2 from '../../img/8_1554887948-1024x518.jpg';
import site_3 from '../../img/34_1554887966-1024x518.jpg';




export  function Disc() {
  return (
    <div className='conteiner_two'>
 <img src={stars_2} className='stars'/>
 <h1>Top 3 interesting sites for cosmos</h1>
<div>
  <div className='mek'>
    <a href='https://joshworth.com/dev/pixelspace/pixelspace_solarsystem.html' className='hr'> 1.If The Moon Were Only 1 Pixel</a>
  <img src={site_1}/>
<p> Most people have no idea how big the cosmos is. It's incredibly huge. The site, if the Moon were only 1 pixel in size, clearly shows the true size of the Solar System. The basis of the scale is the diameter of the Moon — here it is equal to 1 pixel.  </p>
  </div>
  <div className='erku'>
    <a href='https://solarsystem.nasa.gov' className='hr'> 2.Solar System Exploration</a>
<img src={site_2}/>
<p>A special NASA page dedicated to all the planets and satellites in the Solar System.Heavenly bodies are beautifully animated,so you can just admire them.But in addition to purely aesthetic enjoyment,the service also provides scientific information about the characteristics of planets,and images of celestial bodies taken by various spacecraft.</p>

  </div>
  <div className='ereq'>
    <a href='https://www.ufo-hunters.com/' className='hr'> 3.UFO Hunters</a>
<img src={site_3}/>
<p>According to UFO Hunters,the number of UFO sightings totals 167 thousand cases.Visit this site to study any of them and read the eyewitness accounts.Here you can also leave your experience of admiring incomprehensible objects in the sky.There are many similar resources,but this one looks better than most.</p>
  </div>
</div>

    </div>
  )
}

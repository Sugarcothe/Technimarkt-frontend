import React, { useEffect, useRef } from 'react';
import './Landing.scss';
import {init} from 'ityped'

const Landing = () => {
  const textRef = useRef()

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backSpeed:70,
      backDelay: 1500,
      strings: ["Fullstack", "JavaScript","Youtuber", "Designer", "Tech Blogger"]
    })
    
  }, [])

  return (
    <div className='landing' id='landing'>
      <div className='left'>
        <div className='imgContainer'>
          <img className='imagekungfu' src='assets/pandora1.gif' alt=''/>
        </div>
      </div>
      <div className='right'>
        <div className='wrapper'>
          <h1>I'm Val</h1>
          <h3>Panda <span ref={textRef}>Developer</span></h3>
        </div>
        <a href="#about">
          <i className="fas fa-angle-double-down fa-3x"></i>
        </a>
      </div>
    </div>
  )
}

export default Landing

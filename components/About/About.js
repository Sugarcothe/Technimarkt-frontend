import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './About.scss'

const About = () => {
  return (
    <div className='about text-center' id='about'>
      <div className='row'>
        <div className=''>
          <img style={{width:200, height:'auto'}} src='assets/myface.png' alt='this is me'/>

            <div className='icons column text-white'>
              <a href='https://www.freecodecamp.org/fccfc062c2b-fe45-43d0-bb2d-58474b4be5cc' target='_blanc'>
                <i class="fab fa-free-code-camp fa-2x m-2"></i>
              </a>
              <a href='https://codepen.io/Sugarcothe' target='_blank'>
                <i class="fab fa-codepen fa-2x m-2"></i>
              </a>
              <a href='https://github.com/Sugarcothe' target='_blank'>
                <i class="fab fa-github fa-2x m-2"></i>
              </a>
              <a href='https://twitter.com/sweetestshuga' target='_blank'>
                <i class="fab fa-twitter fa-2x m-2"></i>
              </a>
              <a href='https://www.hackerrank.com/ifeanyivalentin1' target='_blank'>
                <i class="fab fa-hackerrank fa-2x m-2"></i>
              </a>
            </div>
        </div>
        
        <div className='aboutp'>
          <h4 className='first text-white'>Eze Valentine Ifeanyichukwu</h4>
          <h5 className='second'>Fullstack Web Developer</h5>
          <hr className='container text-white'/>
          <p className='para container text-white text-justify'>
          I am very much confident in MERN stack and her frameworks, I enjoy frontend, so i also do a lot with CSS frameworkd like tailwing, Bootstrap and sass. I have built awesome web applications and participated in hackatons, software architecture and also databases entity relational diagram (ERD) development. I write clean and readable codes and while at that, I am dedicated to a life of learning new things everyday.
          </p>
        </div>
      </div>
    </div>
  )
}

export default About

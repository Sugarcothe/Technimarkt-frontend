import React from 'react';
import './LandingPage.css';
import { motion } from "framer-motion";

const LandingPage = () => {
  return (
    <div className='landingPage'>
      <div className='container showcase'>
        <h1>TOMORROW IS TODAY</h1>
        <h3>Welcome To The Biggest tech Market</h3>
        <p className='para-text text-light'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        <div    className='landingPageSmallScreenButton'>
            <motion.button 
            className='btn btn-dark px-5'
            whileHover={{scale: 1.2}}
            transition={{ duration: 0.6 }}
            > 
            <a 
            className='text-decoration-none text-white' href='/Login'>
              Login/Signup
              </a> 
            </motion.button>
          </div>
        <div className='landingPageButton'>
        <motion.button 
          className='btn btn-dark px-5'
          whileHover={{scale: 1.2}}
          transition={{ duration: 0.6 }}
          > 
          <a 
          className='text-decoration-none text-white' href='/Feed'>
            Market
            </a> 
          </motion.button>

          <motion.button
           className='btn border border-dark m-3 px-5'
           whileHover={{scale: 1.2}}
           transition={{ duration: 0.6 }}
           >
          <a 
          className='text-decoration-none text-dark'
          href='/Login'>
            Login/Signup
          </a> 
          </motion.button>
        </div>
          
        </div>
    </div>
  )
}

export default LandingPage

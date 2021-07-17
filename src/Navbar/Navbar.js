import React from 'react';
import './Navbar.css';
import { motion } from 'framer-motion';
import NavImage from './logo192.png';
import ImageNav from './emma.jpg'


const Navbar = () => {
  return (
      <div>
          <nav className="navbar">
            <label 
              className="navbar-toggle" 
              id="js-navbar-toggle" 
              for="chkToggle">
                <i className="fa fa-bars"></i>
            </label>
            <a href="/" className="logo"><img style={{width:40}} src={NavImage} alt="this is it"/></a>
            <input type="checkbox" id="chkToggle"></input>



            <ul class="main-nav" id="js-menu">
              
              <a href="/Profile">
                <img style={{width:30, borderRadius:50}} 
                src={ImageNav} 
                alt='emma'/>
              </a>
              <motion.li
                whileHover={{scale:1.3}}
                transition={{ duration:0.4}}
              >
                <a href="/" className="nav-links">Home</a>
              </motion.li>

              <motion.li
                whileHover={{scale:1.3}}
                transition={{ duration:0.4}}
              >
                <a href="/Feed" className="nav-links">Market</a>
              </motion.li>
              <motion.li
                whileHover={{scale:1.3}}
                transition={{ duration:0.4}}
              >
                <a href="Login" className="nav-links">Login</a>
              </motion.li>
              <motion.li
                whileHover={{scale:1.3}}
                transition={{ duration:0.4}}
              >
                <a href="Signup" className="nav-links">Signup</a>
              </motion.li>
            </ul>
          </nav>
      </div>
  )
}

export default Navbar

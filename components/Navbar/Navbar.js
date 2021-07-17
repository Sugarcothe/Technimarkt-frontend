import React from 'react'
import './Navbar.scss'

const Navbar = ({menuOpen, setMenuOpen}) => {
  return (
    <div className={'navbar ' + (menuOpen && "active")}>
      
      <div className='wrapper'>
        <div className='left'>
          <a href='#landing' className='logo' >PandaJs.wtf!</a>
        </div>
        <div className='itemsContainer'>
          
        </div>
        <div className='itemsContainer'>

        </div>
        
        <div className='right'>
          <div 
          className='harmburger'
          onClick={() => 
          setMenuOpen(!menuOpen)}>
            <span className='line1'></span>
            <span className='line2'></span>
            <span className='line3'></span>
          </div>  
        </div>
      </div>
    </div>
  )
}

export default Navbar

import React, { useState } from 'react';
import './Proj.scss'

const Project = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  


  const data = [
    {
      id: '1',
      icon: 'assets/beatbox.png',
      title: 'Drum boy',
      proj: 'Beat Box',
      desc: 'ReactJS',
      img:'assets/drumbox.png',
      github:'',
      link:''

    },
    {
      id: '2',
      icon: 'assets/cart.png',
      title: 'Booker Buy',
      proj: 'E-commerce',
      desc: 'MERN stack',
      img:'assets/bookecommerce.png',
      github:'',
      link:''

    },
    {
      id: '3',
      icon: 'assets/chaticon.png',
      title: 'Pidgin Box',
      proj: 'Chat APP',
      desc: 'MERN stack',
      img:'assets/pidgin.png',
      github:'',
      link:''
      

    }, 
    {
      id: '4',
      icon: 'assets/mobile.png',
      title: 'Interact',
      proj: 'Social Media',
      desc: 'MERN Stack',
      img:'assets/socialmedia.jpg',
      github:'',
      link:''
      

    } 
  ]

  const handleClick = (way) => {
    way === 'left' ? setCurrentSlide(currentSlide > 0 ? currentSlide-1 : 3) : setCurrentSlide(currentSlide<data.length -1 ?currentSlide+1: 0)
  }

  return (
    <div className='projects' id='projects'>
      <div className='slider' style={{transform:`translateX(-${currentSlide *100}vw)`}}>    
        {data.map((d) => (
        <div className='container'>
          <div className='item'>
            <div className='left'>
              <div className='leftContainer'>
                <div className='imgContainer'>
                <img src={d.icon} alt='logo'/>
                </div> 
                <h4>{d.title}</h4>
              <p>{d.desc}</p>
              <span>{d.proj}</span>
              <div className='links'>
                <a href=''><i class="fab fa-github"></i></a>
                <a className='lin' href=''><i class="fas fa-link m-3"></i></a>
              </div>
              </div>
            </div>
            <div className='right'>
              <img src={d.img} 
              alt='imago'/>
            </div>
          </div>
          
        </div>))}
      </div>
        <div onClick={()=> handleClick('left')}>
          <i className="fas fa-arrow-alt-circle-right fa-3x right" ></i>
        </div>
        <div onClick={()=> handleClick('left')}>
          <i className="fas fa-arrow-alt-circle-left fa-3x left"></i>
        </div>
    </div>
  )
}

export default Project


// https://www.youtube.com/watch?v=DG_8z5FPsi8
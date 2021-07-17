import React, {useState} from 'react'
import './Blog.scss'


const Portfolio = () => {



  const certificates = [
    {
      id: 1,
      By: 'FreeCodeCamp',
      title: 'Frontend Libraries',
      img: 'assets/Fcfront.png',
      link: 'https://freecodecamp.org/certification/fccfc062c2b-fe45-43d0-bb2d-58474b4be5cc/front-end-libraries'
    },
    {
      id: 2,
      By: 'HackerRank',
      title: 'React',
      img: 'assets/HRreact.png',
      link: 'https://www.hackerrank.com/certificates/4b4dc06904a5'
    },
    {
      id: 3,
      By: 'HackerRank',
      title: 'JavaScript',
      img: 'assets/HR-JS.png',
      link: 'https://www.hackerrank.com/certificates/e8e45b8c57a2'
    },
    {
      id: 4,
      By: 'Programming Hub',
      title: 'JQuery',
      img: 'assets/this.png',
      link: ''
    },
    {
      id: 5,
      By: 'FreeCodeCamp',
      title: 'Responsive Web Design',
      img: 'assets/FCresp.png',
      link: 'https://freecodecamp.org/certification/fccfc062c2b-fe45-43d0-bb2d-58474b4be5cc/responsive-web-design'
    },
  ]

  // {
  //   id: 1,
  //   By: 'FreeCodeCamp',
  //   title: 'Frontend Libraries',
  //   img: 'assets/FCfront.png',
  //   link: 'freecodecamp.org/certification/fccfc062c2b-fe45-43d0-bb2d-58474b4be5cc/front-end-libraries'
  // },

  return (
    <div className='testimonials' id='blog'>
      <h1>Certificates</h1>
      <div className='container'>
        {certificates.map((d) => (
          <div className='item'>
            <img src={d.img} alt='my image'/>
            <a href={d.link} target='_blank'><i class="fas fa-link"></i>{d.title}</a>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Portfolio












// HackkerrankReact   https://www.hackerrank.com/certificates/4b4dc06904a5

// HackerrankJs    https://www.hackerrank.com/certificates/e8e45b8c57a2

//freecodecamp.org/certification/fccfc062c2b-fe45-43d0-bb2d-58474b4be5cc/front-end-libraries

//freecodecamp.org/certification/fccfc062c2b-fe45-43d0-bb2d-58474b4be5cc/responsive-web-design

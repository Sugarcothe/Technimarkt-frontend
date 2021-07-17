import React from 'react';
import './Testimonials.scss'



const Testimonials = () => {
const data = [
  {
    id: '2',
    name: 'Toochukwu Idoko',
    title: 'Web Developer',
    img: 'assets/Too.jpg',
    link: '',
    desc: 'How you handle web developement projects are just amazing, Your outputs are quite amazing!'
  },
  {
    id: '1',
    name: 'Steven Kakooza',
    title: 'Founder Yummyie Shoppers',
    img: 'assets/kakooza.jpg',
    link: '',
    desc: 'I really love how greatly Val would insist on latest practice of code, and would be there to help in lapses.',
    featured: true,
  },
  {
    id: '2',
    name: 'Opeyemi Alao',
    title: 'DevOps Engineer at Darey.io',
    img: 'assets/alao.png',
    link: '',
    desc: 'Val is a trailblazer and being a result oriented person, i see him going far in tech'
  },
]

  return (
    <div className='testimonials' id='testimonials'>
      <h1>Testimonals</h1>
        <div className='container'>
          {data.map((d) => (
          <div className={d.featured ? 'card featured' : 'card'}>
            <div className='top'>
              <img className='user' src={d.img} alt=''/>
              <a href={d.link}><i class="fab fa-twitter right"></i></a>
            </div>
            <div className='center'>{d.desc}</div>
            <div className='bottom'>
              <h3>{d.name}</h3>
              <h4>{d.title}</h4>
            </div>
          </div>
           ))}
        </div>
    </div>
  )
}

export default Testimonials


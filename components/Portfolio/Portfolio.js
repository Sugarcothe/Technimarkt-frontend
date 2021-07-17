import React, {useState, useEffect} from 'react'
import './Portfolio.scss'
import PortfolioList from '../PortfolioList/PortfolioList'
import {
  otherPortfolio,
  frontendPortfolio,
  backendPortfolio
} from '../../data'

const Portfolio = () => {
  const [selected, setSelected] = useState('featured')
  const [data, setData] = useState([])



  const list = [
  
    {
      id: "frontend",
      title: "Frontend"
    },
    {
      id: "backend",
      title: "Backend"
    },
    {
      id: "others",
      title: "Others"
    }
  ]

  useEffect(() => {
    switch(selected) {
      case 'frontend':
        setData(frontendPortfolio)
        break
      case 'backend':
        setData(backendPortfolio)
        break
      case 'others':
        setData(otherPortfolio)
        break
        default:
          setData(frontendPortfolio)
    }

  },[selected])


  return (
    <div className='portfolio' id='portfolio'>
      <h1>Stack</h1>
      <ul>
        {list.map((item)=>(
          <PortfolioList 
          title={item.title} 
          active={selected === item.id} 
          setSelected={setSelected}
          id={item.id}
          />
        ))}
      </ul>
      <div className='container'>
        {data.map((d) => (
          <div className='item'>
            <img src={d.img} alt='my image'/>
            <h3>{d.title}</h3>
          </div>
       
        ))}
      </div>
    </div>
  )
}

export default Portfolio

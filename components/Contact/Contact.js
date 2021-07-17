import React, {useState} from 'react'
import './Contact.scss'

const Contact = () => {
  const [message, setMessage] = useState(false)


  const handleSubmit = (e) => {
    e.preventDefault()
    setMessage(true)
  }
  return (
    <div className='contact' id='contact'>
      <div className='left'>
        <img style={{width:260, height:'auto'}} src='assets/kunfupanda.png' alt='cotact'/>
      </div>
      <div className='right'>
        <h2>Contact</h2>
        <h5><i class="fas fa-mobile-alt"></i> +2347067869822</h5>
        <form onSubmit={handleSubmit}>
          <input type='text' placeholder='Email'/>
          <textarea placeholder='Message Panda...'></textarea>
          <button type='submit'>Send</button>
          <a 
          className='btn' 
          target='_blank'
          href='ifeanyivalentine82@gmail.com'>
              Email
          </a>
          {message && <span>Thanks, Panda is happy, i will reply ASAP </span>}
        </form>
      </div>
    </div>
  )
}

export default Contact

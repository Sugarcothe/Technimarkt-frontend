import React from 'react';
import MarketImage from './roboto.jpg'
import DroneImage from './Drone.jpg'

const Market = () => {
  return (
    <div className='MarketPage container'>
      <div className='MarketPage'>
      <div className='row MarketPage'>

        <div className='col-md-8'>
          <div className=''>
          <h1>Feed</h1>
            <a className='btn btn-dark btn-sm text-decoration-none text-light m-3' href='/Post' >Post</a>
          </div>
            <div className="card p-2 my-3">
            <img src={MarketImage} className="card-img-top" alt="img or video"/>
            <div class="card-body">
              <h5 className="card-title">Robbins Robot</h5>
              <p>Producer: Valentine</p>
              <p>Category: Robotics</p>
              <p className="card-text text-justify">Description: Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <p>Price: $98</p>
              <a href="/EditProfile" class="btn btn-sm btn-dark m-2">Buy</a>
              <a href="/Post" class="btn btn-sm border border-dark">Edit Post</a>
            </div>
            </div>

            <div className="card p-2">
            <img src={DroneImage} className="card-img-top" alt="img or video"/>
            <div class="card-body">
              <h5 className="card-title">Jt Drone</h5>
              <p>Producer: Nasir</p>
              <p>Category: Aero Robotics</p>
              <p className="card-text text-justify">Description: Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <p>Price: $349</p>
              <a href="/EditProfile" class="btn btn-sm btn-dark m-2">Buy</a>
              <a href="/Post" class="btn btn-sm border border-dark">Edit Post</a>
            </div>
            </div>
          </div>

          <div className='col-md-3 p-3'>
          <div className="card P-2">
            <h4>Category</h4>
            <select id="inputState" class="form-control">
                  <option selected>Select Your Tech</option>
                  <option selected>Robotics</option>
                  <option selected>Electrical/Electronics</option>
                  <option selected>Mechanical</option>
                  <option selected>Automobile</option>
                  <option selected>Civil Engineering & Design</option>
                  <option selected>Product Design</option>
                  <option selected>AI</option>
                  <option selected>Mobile Phones</option>
                  <option>Aquatic Technology</option>
                </select>
          <div class="card-body">
          </div>
        </div>
        </div>

          
        </div>
      </div>
      </div>
  )
}

export default Market

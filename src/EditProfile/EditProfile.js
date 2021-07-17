import React from 'react';
import Avatar from './avatar.jpg';

const EditProfile = () => {


  return (
    <div className='container text-center mt-3'>
      <div className='EditProfileAvatar'>
        <img style={{width:200, height:'auto'}} src={Avatar} alt='avatar'/>
      </div>
      <div className='formLength'>
      <form className='formLength px-5'>
        <div class="form-row">
          <div class="form-group mb-3">
            <label>About</label>
            <textarea 
              class="form-control"
              placeholder='Interests look at your about section, so make it catchy!' 
              id="exampleFormControlTextarea1" 
              rows="3"></textarea>
          </div>
        </div>           
           
        <div class="form-row row">
          <div class="form-group mb-3 col-md-3">
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
          </div>
          
          <div class="form-group col-md-2 mb-3">
            <input type="text" class="form-control" id="inputZip" placeholder="Gender"/>
          </div>

        </div>
        
            <button type="submit" class="btn btn-primary mt-3">Update</button>
          </form>
      </div>
    </div>
  )
}

export default EditProfile

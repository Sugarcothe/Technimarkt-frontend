 import React from 'react';
 import PostAvatar from './bot.jpeg'

const Post = () => {
  return (
    <div className='container'>
      <div className='text-center mt-3 row'>
      <small>Image/Video should be 10mb or less</small>
        <div className='my-3'>
        <img style={{width:250}} src={PostAvatar} alt='PostAvatar'/>
        <form>
        <input 
          className='text-center'
          type="file" 
          id="fileupload"/> 
        </form>
        </div> 

        <div className='text-center my-3'>
        <div class="form-group mb-3 text-center" >
            <select id="inputState" className="p-1">
              <option selected autoFocus>Others</option>
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
        </div>

        <form className='text-center my-3'>
        <div class="">
          <label for="exampleFormControlTextarea1">About the Product</label>
          <textarea
           className="form-control text-center align-center" id="exampleFormControlTextarea1" rows="3"></textarea>
        </div>

        </form>
        
        <div className='text-center'>
          <form> 
            <input 
              className='btn btn-dark btn-sm'
              type="submit" 
              value="submit"
              /> 
          </form>
        </div>
      </div>
    </div>
  )
}

export default Post

import React from 'react';
import ProfileImage from './emma.jpg'

const Profile = () => {
  return (
    <div className='container'>
      <div className='row ProfilePage text-center mt-3 border p-2'>
        <div className='EditProfileImage col-sm-6 '>
          <img className='img-responsive text-center' style={{width:250, height:'auto', borderRadius:200}} src={ProfileImage} alt='avatar'/>
          <h3 className='p-3'>VALENTINE</h3>
        </div>

        <div className='mt-3 col-sm-4 text-justify'>
          <p><span className='font-weight-bold'>Country:</span> Nigeria</p>
          <p><span className='font-weight-bold'>Tech:</span> Automobiles</p>
          <p><span className='font-weight-bold'> Market:</span> $345k</p>
          <p><span className='font-weight-bold'> TechLevel:</span> Legend</p>
          <p><span className='font-weight-bold'> Influence:</span> Plato</p>
          <div className='profileAbout border p-2 text-center'> 
            <p className='font-italic'>Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without</p>
          </div>
        </div>
      </div>
      <div className='testimonialsProfile p-3'>
        <h4 className='text-center'>Testimonials</h4>
        <div className='eachTestimonial pt-4'>
          <div className='border p-2'>
            <h5>Jeremiah </h5><p className='font-style-italic text-success'>(Web Developer)</p>
            <p className='testimonialText'>"Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of" </p>
          </div>
        </div>
        <div className='eachTestimonial pt-4'>
          <div className='border p-2'>
            <h5>Ebuka </h5><p className='font-style-italic text-success'>(Robotics)</p>
            <p className='testimonialText'>"Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without"</p>
          </div>
        </div>
        <div className='eachTestimonial pt-4'>
          <div className='border p-2'>
            <h5>Aisha </h5><p className='font-style-italic text-success'>(Civil Engineering)</p>
            <p className='testimonialText'>"ipsum is a placeholder text commonly"</p>
          </div>
        </div>
        <div className='eachTestimonial pt-4'>
          <div className='border p-2'>
            <h5>Opeyemi </h5><p className='font-style-italic text-success'>(Ai)</p>
            <p className='testimonialText'>"placeholder text commonly used to demonstrate the visual form of a document or a typeface without"</p>
          </div>
        </div>
        <div className='eachTestimonial pt-4'>
          <div className='border p-2'>
            <h5>Matthew </h5><p className='font-style-italic text-success'>(Product Design)</p>
            <p className='testimonialText'>"text commonly used to demonstrate the visual form of a document or a typeface without"</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile

import React from 'react'

const LoginFrame = ({name, value, onChange, error}) => {
  return (
    <div class="pt-4">
      <input 
        className="form-control" 
        autoFocus
        value={value}
        onChange={onChange}
        name={name}
        type={name}
        id={name} 
        placeholder={name}
        />
        {error && <div className='alert alert-danger'>{error}</div>}
    </div>
  )
}

export default LoginFrame

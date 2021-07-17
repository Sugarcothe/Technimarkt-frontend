import React from 'react'

const SingnupFrame = ({name, value, onChange, type }) => {

  return (
    <div className="form-group col-md-6 mb-3">
      <input
        className="form-control" 
        autoFocus
        value={value}
        name={name}
        id={name}
        placeholder={name}
        onChange={onChange}
        type={type} 
        />
    </div>
  )
}

export default SingnupFrame


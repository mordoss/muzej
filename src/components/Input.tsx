import React from 'react'

const Input = ({ label, type, placeholder }) => {
  return (
    <div>
      <label htmlFor={label}>{label}</label>
      {type === 'textarea' ? (
        <textarea placeholder={placeholder} />
      ) : (
        <input type={type} id={label} placeholder={placeholder} name={label} />
      )}
    </div>
  )
}

export default Input

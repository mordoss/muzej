// @ts-nocheck

import React from 'react'

const Checkbox = ({ label }) => {
  return (
    <div className="container">
      <label htmlFor={label}>{label}</label>
      <div className="checkboxes">
        <div className="checkbox-container">
          <input
            type="checkbox"
            id={`${label}-da`}
            className="styled-checkbox"
          />
          <label htmlFor={`${label}-da`} className="checkbox-label">
            Da
          </label>
        </div>
        <div className="checkbox-container">
          <input
            type="checkbox"
            id={`${label}-ne`}
            className="styled-checkbox"
          />
          <label htmlFor={`${label}-ne`} className="checkbox-label">
            Ne
          </label>
        </div>
      </div>{' '}
    </div>
  )
}

export default Checkbox

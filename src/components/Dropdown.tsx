// @ts-nocheck

import { useState, type FC, useEffect, useRef } from 'react'
import '../styles/Dropdown.css'

interface IProps {
  options: string[]
}

const Dropdown: FC<IProps> = ({ options }) => {
  const [showOptions, setShowOptions] = useState(false)
  const [selectedOption, setSelectedOption] = useState<null | string>(null)
  const menuRef = useRef(null)
  const buttonRef = useRef(null)

  const handleOutsideClick = (event: any) => {
    if (
      menuRef.current &&
      !menuRef.current.contains(event.target) &&
      event.target !== buttonRef.current
    ) {
      setShowOptions(false)
    }
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleOutsideClick)
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick)
    }
  }, [])

  return (
    <div className="dropdown-container">
      <button
        ref={buttonRef}
        className={`${showOptions && 'open'} dropdown-btn`}
        onClick={(e) => {
          e.preventDefault()
          setShowOptions(!showOptions)
        }}
      >
        <div className={`arrow ${showOptions && 'rotate'}`} />
        {selectedOption ? selectedOption : options.join(' / ')}
      </button>
      {showOptions && (
        <div className="dropdown-content shadow" ref={menuRef}>
          {options.map((option) => (
            <button
              key={option}
              onClick={() => {
                setSelectedOption(option)
                setShowOptions(false)
              }}
            >
              {option}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

export default Dropdown

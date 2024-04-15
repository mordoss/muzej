import type { FC } from 'react'
import '../styles/Checkbox.css'

export enum Options {
  Da = 'da',
  Ne = 'ne',
}

interface IProps {
  label: string
  value: Options | null
  setSelectedOption: React.Dispatch<React.SetStateAction<Options | null>>
}

const Checkbox: FC<IProps> = ({ label, value, setSelectedOption }) => {
  const handleOptionChange = (option: Options) => {
    setSelectedOption(option)
  }

  return (
    <div className="container">
      <label htmlFor={label}>{label}</label>
      <div className="checkboxes">
        <div className="checkbox-container">
          <input
            type="radio"
            id={`${label}-da`}
            className="styled-checkbox"
            value={Options.Da}
            checked={value === Options.Da}
            onChange={() => handleOptionChange(Options.Da)}
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
            value={Options.Ne}
            checked={value === Options.Ne}
            onChange={() => handleOptionChange(Options.Ne)}
          />
          <label htmlFor={`${label}-ne`} className="checkbox-label">
            Ne
          </label>
        </div>
      </div>
    </div>
  )
}

export default Checkbox

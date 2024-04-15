import Button from './Button'
import Input from './Input'
import Dropdown from './Dropdown.tsx'
import type { FC } from 'react'
import type { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form'
import '../styles/ButtonCard.css'

interface IProps {
  heading: string
  dropdowns: string[][]
  options: string[]
  prices: string[]
  register: UseFormRegister<FieldValues>
  errors: FieldErrors<FieldValues>
}

const ButtonCard: FC<IProps> = ({
  heading,
  dropdowns,
  options,
  prices,
  register,
  errors,
}) => (
  <>
    <div className="container">
      <h4>{heading}</h4>
      {dropdowns.map((options: string[], i: number) => (
        <Dropdown options={options} key={i} />
      ))}
      <ul>
        {options.map((option: string) => (
          <li key={option}>{option}</li>
        ))}
      </ul>
      <div className="bottom">
        <div>
          {prices.map((price: string) => (
            <p key={price}>{price}</p>
          ))}
        </div>
        <div className="input-container">
          <Input
            placeholder="Količina"
            label=" "
            register={register}
            errors={errors}
            type="number"
          />
        </div>
        <Button text="Pošaljite zahtev" style={{ width: '100%' }} />
      </div>
    </div>
  </>
)

export default ButtonCard

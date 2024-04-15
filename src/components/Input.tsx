import type { HTMLInputTypeAttribute, FC } from 'react'
import '../styles/Input.css'
import type { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form'
import { ErrorMessage } from '@hookform/error-message'

interface IProps {
  label: string
  type: HTMLInputTypeAttribute
  placeholder: string
  hiddenLabel?: boolean
  required?: boolean
  register: UseFormRegister<FieldValues>
  errors: FieldErrors<FieldValues>
}

const Input: FC<IProps> = ({
  label,
  type,
  placeholder,
  register,
  errors,
  hiddenLabel,
  required = true,
}) => {
  return (
    <div className="input-container">
      {!hiddenLabel && <label htmlFor={label}>{label}</label>}
      {type === 'textarea' ? (
        <textarea
          placeholder={placeholder}
          {...(register &&
            register(label, { required: required && 'Ovo polje je obavezno' }))}
        />
      ) : (
        <input
          type={type}
          id={label}
          placeholder={placeholder}
          {...(register &&
            register(label, { required: 'Ovo polje je obavezno' }))}
        />
      )}
      <ErrorMessage
        errors={errors}
        name={label}
        render={({ message }) => <p className="error">{message}</p>}
      />
    </div>
  )
}

export default Input

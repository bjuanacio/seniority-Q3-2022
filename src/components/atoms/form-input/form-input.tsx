import { FC } from 'react'
import './form-input.scss'

export interface FormInputProps {
  label: string
  value: string
  handleChange: any
}

const FormInput: FC<FormInputProps> = ({ label, value, handleChange }) => {
  return (
    <div className="form-input">
      <label>{label}</label>
      <input type="text" value={value} onChange={(e) => handleChange(e.target.value)} />
      {!value && <label className="form-input__helper">{`${label} no válido`}</label>}
    </div>
  )
}

export default FormInput

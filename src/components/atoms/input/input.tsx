import { FC } from 'react'
import './input.scss'

export interface InputProps {
  label: string
  id: string
  value?: string
  onChange: (name: string, value: string) => void
}

const Input: FC<InputProps> = ({ onChange, id, label, value }) => {
  return (
    <div className="input">
      <label className="input__label" htmlFor={id}>
        {label}
      </label>
      <input
        className="input__text"
        type="text"
        id={id}
        name={id}
        value={value}
        onChange={(event) => {
          const { name: nameTarget, value: valueTarget } = event.target
          onChange(nameTarget, valueTarget)
        }}
      />
    </div>
  )
}

export default Input

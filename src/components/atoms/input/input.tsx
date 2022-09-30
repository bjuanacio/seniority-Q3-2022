import { FC } from 'react'
import { Player } from '../../../services/player.service'
import './input.scss'

interface InputProps {
  placeholder?: string
  value?: string
  onChange: (value: string, name?: keyof Player) => void
  error?: string
  name?: keyof Player
}

const Input: FC<InputProps> = ({
  onChange,
  placeholder = '',
  value = '',
  error = '',
  name = 'firstName'
}) => {
  return (
    <div className="input">
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value, name)}
        className={`input__input ${error ? 'input__input--error' : ''}`}
      />
      {error && <div className="input__error">{error}</div>}
    </div>
  )
}

export default Input

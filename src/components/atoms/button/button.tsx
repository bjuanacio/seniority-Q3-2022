import { FC } from 'react'
import './button.scss'

export interface ButtonProps {
  label?: string
  handleClick: () => void
}

const Button: FC<ButtonProps> = ({ label, handleClick }) => {
  return (
    <div>
      <button onClick={handleClick}>{label}</button>
    </div>
  )
}

export default Button

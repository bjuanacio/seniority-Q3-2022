import { FC } from 'react'
import './button.scss'

export interface ButtonProps {
  label: string
  onClick: () => void
}
const Button: FC<ButtonProps> = ({ label, onClick }) => {
  return (
    <button className="button" onClick={onClick}>
      {label}
    </button>
  )
}

export default Button

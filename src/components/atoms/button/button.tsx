import { FC } from 'react'
import './button.scss'

export interface ButtonProps {
  id?: string
  width?: string
  onClick?(): void
}

const Button: FC<ButtonProps> = ({ id, width, onClick, children }) => {
  return (
    <button data-testid={id} id={id} className="button" style={{ width }} onClick={onClick}>
      {children}
    </button>
  )
}

export default Button

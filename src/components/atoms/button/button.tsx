import React, { FC } from 'react'
import './button.scss'

interface ButtonProps {
  text?: string
  onClick: () => void
  disabled?: boolean
}

export const Button: FC<ButtonProps> = ({ onClick, text = 'Agregar', disabled = false }) => {
  return (
    <button className="button" onClick={onClick} disabled={disabled}>
      {text}
    </button>
  )
}

export default Button

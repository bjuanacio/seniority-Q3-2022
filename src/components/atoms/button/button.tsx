import { FC } from 'react'
import './button.scss'

export interface ButtonProps {
  text: string
  onClick?: (clickEvent: any) => void
}

export const Button: FC<ButtonProps> = ({ text, onClick }) => {
  return (
    <button className="button" onClick={onClick}>
      {text}
    </button>
  )
}

import { FC } from 'react'
import './index.scss'

export interface ButtonProps {
  id?: string
  width?: string
  className?: string
  onClick?(): void
  variant?: 'primary' | 'secondary'
  disabled?: boolean
  testId?: string
}

export const Button: FC<ButtonProps> = ({
  id,
  width,
  className = '',
  onClick,
  children,
  variant = 'primary',
  disabled = false,
  testId
}) => {
  return (
    <button
      disabled={disabled}
      id={id}
      className={`button button-${variant} ${className}`}
      style={{ width }}
      onClick={onClick}
      data-testid={testId}
    >
      {children}
    </button>
  )
}

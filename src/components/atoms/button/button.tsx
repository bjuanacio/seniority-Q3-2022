import { FC } from 'react'
import { ReactNode } from 'react'
import { BtnContainer } from './button.styles'

export interface ButtonProps {
  icon?: ReactNode
  children?: React.ReactNode
  disabled?: boolean
  type?: 'primary' | 'text'
  onClick?: () => void
}

const Button: FC<ButtonProps> = ({ icon, children, disabled, type, onClick }) => {
  let className = `btn`

  if (type === 'text') {
    className += ` btn--text`
  }

  if (disabled) {
    className += ` btn--disabled`
  }

  return (
    <BtnContainer>
      <button className={className} disabled={disabled} onClick={onClick}>
        {icon}
        {children && <span>{children}</span>}
      </button>
    </BtnContainer>
  )
}

export default Button

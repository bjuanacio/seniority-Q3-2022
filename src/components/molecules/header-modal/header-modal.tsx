import React from 'react'
import CloseIcon from '../../../assets/close-icon.svg'
import './header-modal.scss'

export interface HeaderProps {
  title: string
}

const HeaderModal = (props: HeaderProps) => {
  const { title } = props
  return (
    <div className="header">
      <h3>{title}</h3>
      <img className="header__close-modal" src={CloseIcon} alt="close-icon" />
    </div>
  )
}

export default HeaderModal

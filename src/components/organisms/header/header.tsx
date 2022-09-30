import { FC } from 'react'
import './header.scss'
import { TextInput } from '../../atoms/text-input/text-input'

export interface HeaderProps {
  title: string
}

export const Header: FC<HeaderProps> = ({ title }) => {
  return (
    <header>
      <h1 className="header__title">{title}</h1>
      <TextInput value="" />
    </header>
  )
}

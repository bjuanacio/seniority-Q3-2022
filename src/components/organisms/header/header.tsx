import { FC } from 'react'
import './header.scss'
import { TextInput } from '../../atoms/text-input/text-input'
import { Button } from '../../atoms/button/button'
import { APP_CONSTANTS } from '../../../constants/app-constants'

export interface HeaderProps {
  title: string
}

export const Header: FC<HeaderProps> = ({ title }) => {
  return (
    <header>
      <h1 className="header__title">{title}</h1>
      <TextInput value="" />
      <Button text={APP_CONSTANTS.BUTTONS.ADD} />
    </header>
  )
}

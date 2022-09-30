import { FC, useState } from 'react'
import './header.scss'
import { TextInput } from '../../atoms/text-input/text-input'
import { Button } from '../../atoms/button/button'
import { APP_CONSTANTS } from '../../../constants/app-constants'
import { useValidation } from '../../atoms/text-input/use-validation/use-validation'

export interface HeaderProps {
  title: string
}

export const Header: FC<HeaderProps> = ({ title }) => {
  const [searchText] = useState('')

  const { isValid } = useValidation((input) => typeof input === 'string')

  return (
    <header>
      <h1 className="header__title">{title}</h1>
      <section className="header__controls">
        <TextInput value={searchText} isValid={isValid} />
        <Button text={APP_CONSTANTS.BUTTONS.ADD} />
      </section>
    </header>
  )
}

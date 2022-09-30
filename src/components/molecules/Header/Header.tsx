import { FC } from 'react'
import './Header.scss'

export interface HeaderProps {
  principalText: string
}

export const Header: FC<HeaderProps> = (props: HeaderProps) => {
  return (
    <section className="header">
      <div className="header__h1">
        <h1 className="header__text">{props.principalText}</h1>
      </div>
    </section>
  )
}

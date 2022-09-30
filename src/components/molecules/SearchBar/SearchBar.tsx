import { Input } from '../../atoms/Input/Input'
import { useState, useEffect } from 'react'
import { UserService } from '../../../services/user.service'
import { FC } from 'react'
import './SearchBar.scss'

export interface SearchBarProps {
  setSearchValue?: (value: string) => void
}
export const SearchBar: FC<SearchBarProps> = (props: SearchBarProps) => {
  return (
    <section className="search">
      <div className="search__input">
        <Input
          placeholder="Buscar por nombre"
          /* onChange={(event: React.FormEvent<HTMLInputElement>) =>
            props.setSearchValue(event.currentTarget.value)
          } */
          type="text"
        ></Input>
      </div>
      <div className="search__button-container">
        <button className="search__button">Agregar</button>
      </div>
    </section>
  )
}

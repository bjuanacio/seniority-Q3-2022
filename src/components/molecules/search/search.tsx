import React, { FC } from 'react'
import { Input } from '../../atoms/input/input'

export interface SearchProps {
  onChangeSearch?: (event: {
    target: {
      value: string
    }
  }) => void
  searchValue?: string
}

export const Search: FC<SearchProps> = ({ onChangeSearch, searchValue }) => {
  return (
    <div className="header-actions__search-container ">
      <span className="header-actions__search-icon "></span>
      <Input
        type="text"
        name="search"
        id="search"
        placeholder="Buscar"
        value={searchValue}
        onChange={onChangeSearch}
      />
    </div>
  )
}

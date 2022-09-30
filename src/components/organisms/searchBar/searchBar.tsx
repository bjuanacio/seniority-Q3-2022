import React from 'react'
import { Button } from '../../atoms/button'
import { Input } from '../../atoms/input'
import './searchBar.scss'

interface SearchProps {
  handleFilter: (value: string) => void
  handleAdd: () => void
}

export const SearchBar: React.FC<SearchProps> = ({ handleFilter, handleAdd }) => {
  return (
    <div className="searchBar-container">
      <Input
        placeholder="BUSCAR POR NOMBRE"
        width="100px"
        inputId="buscar"
        onChange={handleFilter}
      />
      <Button variant="primary" testId="agregar" onClick={handleAdd}>
        Agregar
      </Button>
    </div>
  )
}

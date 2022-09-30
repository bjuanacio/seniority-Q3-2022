import React from 'react'
import { Button } from '../atoms/button'
import { Input } from '../atoms/input'
import './searchBar.scss'

export const SearchBar = () => {
  return (
    <div className="searchBar-container">
      <Input placeholder="BUSCAR POR NOMBRE" width="100px" inputId="buscar" />
      <Button variant="primary" testId="agregar">
        Agregar
      </Button>
    </div>
  )
}

import React from 'react'

export const SearchPlayer = ({
  busqueda,
  handleChange
}: {
  busqueda: string
  handleChange: any
}) => {
  return (
    <div>
      <input
        type="search"
        placeholder="Buscar por nombre"
        data-testid="search-player"
        className="search"
        value={busqueda}
        onChange={handleChange}
      />
    </div>
  )
}

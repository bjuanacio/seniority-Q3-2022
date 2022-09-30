import React, { FC } from 'react'
import { Player, PlayerPosition } from '../../../services/player.service'
import './select.scss'

export const defaultOptions: PlayerPosition[] = [
  { id: 1, description: 'Portero' },
  { id: 2, description: 'Defensa' },
  { id: 3, description: 'Mediocampista' },
  { id: 4, description: 'Delantero' }
]

interface SelectProps {
  selectedValue: number
  options?: PlayerPosition[]
  onChange?: (value: string, name: keyof Player) => void
  name?: keyof Player
}

export const Select: FC<SelectProps> = ({
  selectedValue,
  options = defaultOptions,
  onChange,
  name
}) => {
  return (
    <select
      className="select"
      onChange={(e) => {
        if (onChange) {
          onChange(e.target.value, name || 'idPosition')
        }
      }}
    >
      {options.map((option) => (
        <option selected={selectedValue === option.id} key={option.id} value={option.id}>
          {option.description}
        </option>
      ))}
    </select>
  )
}

export default Select

import { FC } from 'react'
import { SelectItem } from '../../../utils/interfaces/select-item'
import './select.scss'

export interface SelectProps {
  label: string
  id: string
  data?: SelectItem[]
  value?: number
  onChange: (name: string, value: string) => void
}

const Select: FC<SelectProps> = ({ onChange, data, id, label }) => {
  return (
    <div className="select">
      <label className="select__label" htmlFor={id}>
        {label}
      </label>
      <select
        className="select__text"
        id={id}
        name={id}
        onChange={(event) => {
          const { name: nameTarget, value: valueTarget } = event.target
          onChange(nameTarget, valueTarget)
        }}
      >
        {data &&
          data.map((item, idx) => (
            <option key={idx} value={item.id}>
              {item.description}
            </option>
          ))}
      </select>
    </div>
  )
}

export default Select

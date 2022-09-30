import { FC } from 'react'
import './search.scss'

export interface SearchProps {
  placeholder?: string
  value: string
  handleChange: (e: any) => void
  isSearch: boolean
}

const Search: FC<SearchProps> = ({ placeholder, value, handleChange, isSearch }) => {
  return (
    <div>
      <input
        className={`input input__${value.length === 0 && !isSearch ? 'error' : 'normal'}`}
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
      />
    </div>
  )
}

export default Search

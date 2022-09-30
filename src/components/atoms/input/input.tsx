import { FC } from 'react'
import { InputContainer } from './input.styles'

export interface InputSearchProps {
  onSearch: (value: string) => void
  placeholder?: string
}

const InputSearch: FC<InputSearchProps> = ({ placeholder = 'Buscar por nombre', onSearch }) => {
  return (
    <InputContainer>
      <form className="search">
        <input
          className="search__input"
          type="search"
          onChange={(e) => onSearch(e.target.value)}
          placeholder={placeholder}
        />
      </form>
    </InputContainer>
  )
}

export default InputSearch

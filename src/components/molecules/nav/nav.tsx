import { FC } from 'react'
import Button from '../../atoms/button/button'
import Search from '../../atoms/search/search'
import './nav.scss'

export interface NavProps {
  label?: string
  handleClick: () => void
  placeholder?: string
  value: string
  handleChange: (e: any) => void
}

const Nav: FC<NavProps> = ({ label, handleClick, placeholder, value, handleChange }) => {
  return (
    <div className="nav">
      <div>
        <Search
          placeholder={placeholder}
          value={value}
          handleChange={handleChange}
          isSearch={true}
        />
      </div>
      <div>
        <Button label={label} handleClick={handleClick} />
      </div>
    </div>
  )
}

export default Nav

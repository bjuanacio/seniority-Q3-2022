import React from 'react'
import Search from '../../atoms/search/search'
import './label-input.scss'

export interface LabelInputProps {
  title: string
  placeholder: string
  value: string
  handleChange: (e: any) => any
  isSearch: boolean
}

const LabelInput = (props: LabelInputProps) => {
  const { title, placeholder, value, handleChange, isSearch } = props
  return (
    <div>
      <h5>{title}</h5>
      <Search
        placeholder={placeholder}
        value={value}
        handleChange={handleChange}
        isSearch={isSearch}
      />
      {!isSearch && value.length === 0 && <p className="error-text">{title} no válido</p>}
    </div>
  )
}

export default LabelInput

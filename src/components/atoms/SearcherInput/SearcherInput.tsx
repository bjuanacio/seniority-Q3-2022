import React, { FC } from 'react'

export const SearcherInput: FC<React.InputHTMLAttributes<HTMLInputElement>> = ({ ...props }) => {
  return (
    <label htmlFor={props?.name}>
      {props?.name || ''}
      <input {...props} id={props?.name} className="input" />
    </label>
  )
}

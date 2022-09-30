import { FC } from 'react'
import './text-input.scss'

export interface TextInputProps {
  value: string
  isValid?: boolean
}

export const TextInput: FC<TextInputProps> = ({ value, isValid = true }) => {
  return <input type="text" value={value} className={`${isValid ? '' : 'error'}`} />
}

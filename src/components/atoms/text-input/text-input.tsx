import { FC } from 'react'
import './text-input.scss'

export interface TextInputProps {
  value: string
}

export const TextInput: FC<TextInputProps> = ({ value }) => {
  return <input type="text" value={value} />
}

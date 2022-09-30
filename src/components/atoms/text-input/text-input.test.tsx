import { render, screen } from '@testing-library/react'
import { TextInput, TextInputProps } from './text-input'

describe('textInput Atom', () => {
  const renderInput = (props: TextInputProps) => {
    return render(<TextInput {...props} />)
  }

  it('should render', () => {
    renderInput({ value: 'jugador' })
    const input = screen.getByDisplayValue('jugador')
    expect(input).toBeInTheDocument()
  })
  it('should been on error state if not valid', () => {
    renderInput({ value: 'jugador', isValid: false })
    const input = screen.getByDisplayValue('jugador')
    expect(input.classList.contains('error')).toBe(true)
  })
})

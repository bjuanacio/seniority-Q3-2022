import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Input from './input'

describe('input tests', () => {
  const onChange = jest.fn()
  it('should render input text', () => {
    render(<Input onChange={onChange} />)
    expect(screen.getByRole('textbox')).toBeInTheDocument()
  })

  it('should render based on props', () => {
    render(<Input onChange={onChange} placeholder="test" value="test" />)
    expect(screen.getByRole('textbox')).toHaveAttribute('placeholder', 'test')
    expect(screen.getByRole('textbox')).toHaveValue('test')
  })

  it('should call onChange', () => {
    render(<Input onChange={onChange} />)
    const input = screen.getByRole('textbox')

    expect(onChange).toBeCalledTimes(0)

    userEvent.type(input, 'test')

    expect(onChange).toBeCalledTimes(4)
  })

  it('should show error message if error prop is different of undefined', () => {
    render(<Input onChange={onChange} error="error" />)
    expect(screen.getByText('error')).toBeInTheDocument()
  })
})

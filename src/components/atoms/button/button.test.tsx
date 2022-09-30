import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Button from './button'

describe('button tests', () => {
  const onClick = jest.fn()
  it('should render default button', () => {
    render(<Button onClick={onClick} />)
    expect(screen.getByRole('button')).toBeInTheDocument()
    expect(screen.getByText('Agregar')).toBeInTheDocument()
  })

  it('should render button based on props', () => {
    render(<Button onClick={onClick} text="test" />)
    expect(screen.getByRole('button')).toBeInTheDocument()
    expect(screen.getByText('test')).toBeInTheDocument()
  })

  it('should call onClick', () => {
    render(<Button onClick={onClick} />)
    const button = screen.getByRole('button')

    expect(onClick).toBeCalledTimes(0)

    userEvent.click(button)

    expect(onClick).toBeCalledTimes(1)
  })
})

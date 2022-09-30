import { fireEvent, render, screen } from '@testing-library/react'
import { Button, ButtonProps } from './button'

describe('Button atom', () => {
  const renderButton = (props: ButtonProps) => {
    return render(<Button {...props} />)
  }

  it('should render', () => {
    renderButton({ text: 'bottom text(intended joke)' })

    const button = screen.getByText('bottom text(intended joke)')

    expect(button).toBeInTheDocument()
  })

  it('should run a function on click', () => {

    const clickHandler = jest.fn()

    renderButton({ text: 'bottom text(intended joke)', onClick: clickHandler })

    const button = screen.getByText('bottom text(intended joke)')

    fireEvent.click(button)

    expect(clickHandler).toHaveBeenCalled()
  })
})

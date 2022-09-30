import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Button from './button'

describe('Button', () => {
  test('should show children', () => {
    render(<Button>Test</Button>)
    expect(screen.getByText('Test')).toBeVisible()
  })

  test('should emit event on click', () => {
    const onClick = jest.fn()
    render(<Button onClick={onClick}>Test</Button>)
    userEvent.click(screen.getByText('Test'))
    expect(onClick).toHaveBeenCalledTimes(1)
  })
})

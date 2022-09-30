import { fireEvent, render, screen } from '@testing-library/react'
import { renderHook, act } from '@testing-library/react-hooks'
import userEvent from '@testing-library/user-event'
import { Button } from './button'

describe('Button', () => {
  it('should display inner text', async () => {
    render(<Button>Hazme click</Button>)
    const buttonFound = await screen.findByText('Hazme click')
    expect(buttonFound).toBeDefined()
    expect(buttonFound).toHaveTextContent('Hazme click')
  })

  /*it('should trigger the click', async () => {
    const mockFunction = jest.fn()
    render(<Button onClick={mockFunction}>Hazme click</Button>)
    const buttonFound = screen.findByText('Hazme click')
    //fireEvent.click(await buttonFound)
    //expect(mockFunction).toBeCalled()
  })*/

  /*
  it('should trigger the click', async () => {
    const mockFunction = jest.fn()
    render(<Button onClick={mockFunction}>Hazme click</Button>)
    const buttonFound = screen.findByText('Hazme click')
    userEvent.click(await buttonFound)
    expect(mockFunction).toBeCalled()
  })
  */
})

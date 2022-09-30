import { render, screen, fireEvent } from '@testing-library/react'
import { Input } from './input'

describe('Input', () => {
  it('Should find input by placeholder', () => {
    render(<Input placeholder="Test PlaceHolder" />)
    const inputFound = screen.getByPlaceholderText('Test PlaceHolder')
    //siempre tener un expect
    expect(inputFound).toBeVisible()
  })

  it('Should checkbox input by type', () => {
    render(<Input type="checkbox" label_checkbox={['Anime', 'Comedia']} />)
    const inputCheckBoxFound = screen.getByText('Anime')
    const inputFound = screen.queryByPlaceholderText('')
    //siempre tener un expect
    expect(inputCheckBoxFound).toBeVisible()
    expect(inputFound).toBeNull()
  })

  it('Should eject onchange function', () => {
    const mockFunction = jest.fn()
    render(<Input placeholder="Ej. name@example.com" onChange={mockFunction} />)
    const inputFound = screen.getByPlaceholderText('Ej. name@example.com')
    fireEvent.change(inputFound, { target: { value: 'chis@gmail.com' } })
    expect(mockFunction).toBeCalled()
  })
})

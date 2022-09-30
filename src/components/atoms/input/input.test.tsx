import { StoreProvider } from '../store/store'
import { fireEvent, render, screen } from '@testing-library/react'
import { Input } from '.'

describe('Input component', () => {
  it('Should render a component', () => {
    render(
      <StoreProvider>
        <Input initialValue="JSI" />
      </StoreProvider>
    )

    const text = screen.getByDisplayValue('JSI')
    fireEvent.change(text, { target: { value: 'a' } })
    expect(text).toBeInTheDocument()
  })
})

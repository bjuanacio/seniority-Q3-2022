import { fireEvent, render, screen } from '@testing-library/react'
import { StoreProvider } from '../store/store'
import Slider from './slider'

describe('Slider test', () => {
  it('should render a slider with a default Value', async () => {
    render(
      <StoreProvider>
        <Slider />
      </StoreProvider>
    )

    const element = screen.getByRole('slider')
    expect(element).toBeInTheDocument()

    const value = screen.getByText('25')
    expect(value).toBeInTheDocument()
  })

  it('should render custom default Value', async () => {
    render(
      <StoreProvider>
        <Slider defaultValue={22} />
      </StoreProvider>
    )

    const value = screen.getByText('25')
    expect(value).toBeInTheDocument()
  })

  it('should render a label', async () => {
    render(
      <StoreProvider>
        <Slider label="my-label" />{' '}
      </StoreProvider>
    )

    const element = screen.getByLabelText('my-label')

    expect(element).toBeInTheDocument()
  })

  it('should change value', async () => {
    render(
      <StoreProvider>
        <Slider />
      </StoreProvider>
    )
    const element = screen.getByRole('slider')

    fireEvent.change(element, { target: { value: 5 } })

    const value = screen.getByText('5')
    expect(value).toBeInTheDocument()
  })
})

import { render, screen } from '@testing-library/react'
import App from './app'
import { StoreProvider } from './components/atoms/store/store'

describe('App component', () => {
  it('Should render a title', () => {
    render(
      <StoreProvider>
        <App />
      </StoreProvider>
    )

    const title = screen.getByText('MI EQUIPO')
    expect(title).toBeInTheDocument()
  })
})

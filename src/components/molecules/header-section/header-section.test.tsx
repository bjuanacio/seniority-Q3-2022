import { render, screen } from '@testing-library/react'
import { PlayerContextProvider } from '../../../context/player-context'
import HeaderSection from './header-section'

describe('HeaderSection tests', () => {
  const renderComponent = () => {
    return render(
      <PlayerContextProvider>
        <HeaderSection />
      </PlayerContextProvider>
    )
  }

  it('should render an InputSearch and a button', () => {
    renderComponent()
    screen.getByPlaceholderText('Buscar por nombre')
    screen.getAllByRole('button', {
      name: 'Agregar'
    })
  })
})

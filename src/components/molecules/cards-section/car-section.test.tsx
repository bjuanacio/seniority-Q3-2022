import { render, screen } from '@testing-library/react'
import { PlayerContextProvider } from '../../../context/player-context'
import { PlayerProps } from '../../../interfaces/player'
import CardSection from './cards-section'

describe('CardSection tests', () => {
  const data = [
    {
      id: 'data',
      firstName: 'data',
      lastName: 'data',
      image: 'data',
      attack: 'data',
      defense: 'data',
      skills: 'data',
      idAuthor: 'data',
      idPosition: 'data'
    }
  ]
  const renderComponent = (list?: PlayerProps[]) => {
    return render(
      <PlayerContextProvider
        initialState={{
          players: list ?? data
        }}
      >
        <CardSection />
      </PlayerContextProvider>
    )
  }

  test('should rende players if there is', () => {
    renderComponent(data)
    const row = screen.getAllByRole('img')
    expect(row).toHaveLength(1)
  })
})

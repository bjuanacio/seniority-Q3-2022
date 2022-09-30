import { fireEvent, render, screen } from '@testing-library/react'
import { PLAYERS } from '../../../utils/constants/constants'
import PlayerCard from './player-card'

describe('PlayerCard test', () => {
  it('should render a player card', async () => {
    render(<PlayerCard playerStats={PLAYERS[0]} handleEdit={() => {}} handleDelete={() => {}} />)

    const element = screen.getByRole('card')
    expect(element).toBeInTheDocument()

    const value = screen.getByText(/lionel messi/i)
    expect(value).toBeInTheDocument()
  })

  it('should execute edit function', async () => {
    const mockOnChange = jest.fn()

    render(
      <PlayerCard playerStats={PLAYERS[0]} handleEdit={mockOnChange} handleDelete={() => {}} />
    )
    const element = screen.getByRole('edit-button')
    fireEvent(
      element,
      new MouseEvent('click', {
        bubbles: true,
        cancelable: true
      })
    )

    expect(mockOnChange).toBeCalled()
  })
})

import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import PlayerCard from './player-card'

const mockdeletePlayer = jest.fn()
const mocksetSelectedPlayerId = jest.fn()
const mocksetModalState = jest.fn()
jest.mock('../../../store/store', () => ({
  useStore: () => ({
    deletePlayer: mockdeletePlayer,
    setSelectedPlayerId: mocksetSelectedPlayerId,
    setModalState: mocksetModalState
  })
}))

describe('PlayerCard', () => {
  const props = {
    firstName: 'firstName',
    lastName: 'lastName',
    image: 'url',
    attack: 30,
    defense: 40,
    skills: 50,
    idAuthor: 32,
    idPosition: 0
  }
  test('should render attack', () => {
    render(<PlayerCard {...props} />)
    expect(screen.getByText('30')).toBeVisible()
  })
  test('should render defense', () => {
    render(<PlayerCard {...props} />)
    expect(screen.getByText('40')).toBeVisible()
  })
  test('should render skill', () => {
    render(<PlayerCard {...props} />)
    expect(screen.getByText('50')).toBeVisible()
  })
  test('should call edit', () => {
    render(<PlayerCard {...props} />)
    expect(mocksetModalState).toHaveBeenCalledTimes(0)
    userEvent.click(screen.getByAltText('edit-icon'))
    expect(mocksetModalState).toHaveBeenCalledTimes(1)
  })

  test('should call delete', () => {
    render(<PlayerCard {...props} />)
    expect(mockdeletePlayer).toHaveBeenCalledTimes(0)
    userEvent.click(screen.getByAltText('delete-icon'))
    expect(mockdeletePlayer).toHaveBeenCalledTimes(1)
  })
})

import { act, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Player } from '../../../services/player.service'
import PlayerCard from './player-card'
import PlayerService from '../../../services/player.service'

jest.mock('../../../services/player.service')
const mockedPlayerService = PlayerService as jest.Mocked<typeof PlayerService>

describe('player-card tests', () => {
  const onEdit = jest.fn()
  const onDelete = jest.fn()
  const testPlayer: Player = {
    image: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1629029.png',
    attack: 99,
    defense: 98,
    skills: 97,
    firstName: 'Luka',
    lastName: 'Doncic',
    id: 1,
    idAuthor: 1,
    idPosition: 1
  }
  it('should render based on props', () => {
    render(<PlayerCard player={testPlayer} onDelete={onDelete} onEdit={onEdit} />)
    expect(screen.getByText(`${testPlayer.firstName} ${testPlayer.lastName}`)).toBeInTheDocument()
    expect(screen.getByText(testPlayer.attack)).toBeInTheDocument()
    expect(screen.getByText(testPlayer.defense)).toBeInTheDocument()
    expect(screen.getByText(testPlayer.skills)).toBeInTheDocument()
  })

  it('should render icons for edit and delete', () => {
    render(<PlayerCard player={testPlayer} onDelete={onDelete} onEdit={onEdit} />)
    expect(screen.getByAltText('Edit')).toBeInTheDocument()
    expect(screen.getByAltText('Delete')).toBeInTheDocument()
  })

  it('should call onEdit when edit icon is clicked', () => {
    render(<PlayerCard player={testPlayer} onEdit={onEdit} onDelete={onDelete} />)
    screen.getByAltText('Edit').click()
    expect(onEdit).toHaveBeenCalled()
  })

  it('should call deletePlayer from PlayerService when delete icon is clicked', async () => {
    mockedPlayerService.deletePlayer.mockResolvedValueOnce(true)
    render(<PlayerCard player={testPlayer} onDelete={onDelete} onEdit={onEdit} />)
    userEvent.click(screen.getByAltText('Delete'))
    expect(mockedPlayerService.deletePlayer).toHaveBeenCalledTimes(1)
  })
})

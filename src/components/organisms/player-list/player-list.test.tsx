import { render, screen } from '@testing-library/react'
import { Player } from '../../../services/player.service'
import PlayerList from './player-list'

describe('PlayerList tests', () => {
  const testPlayers: Player[] = [
    {
      id: 55,
      firstName: 'Lionel',
      lastName: 'Messi',
      image:
        'https://img.playbuzz.com/image/upload/q_auto:best,f_auto,fl_lossy,w_640,c_limit,dpr_2/v1554459829/mjwyabc0umeiiwcw5dup.jpg',
      attack: 99,
      defense: 30,
      skills: 97,
      idAuthor: 42,
      idPosition: 1
    },
    {
      id: 58,
      firstName: 'Kylian',
      lastName: 'Mbappé',
      image:
        'https://img.playbuzz.com/image/upload/q_auto:best,f_auto,fl_lossy,w_640,c_limit,dpr_2/v1554460147/xqxkizzgblhjjitkqdwz.jpg',
      attack: 99,
      defense: 30,
      skills: 97,
      idAuthor: 42,
      idPosition: 2
    }
  ]
  const onEdit = jest.fn()
  const onDelete = jest.fn()
  it('should render player list from', () => {
    render(<PlayerList players={testPlayers} onDelete={onDelete} onEdit={onEdit} />)
    expect(screen.getByText('Lionel Messi')).toBeInTheDocument()
  })

  it('should filter players', () => {
    render(<PlayerList players={testPlayers} filter="lionel" onDelete={onDelete} onEdit={onEdit} />)
    expect(screen.getByText('Lionel Messi')).toBeInTheDocument()
    expect(screen.queryByText('Kylian Mbappé')).not.toBeInTheDocument()
  })
})

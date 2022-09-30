import { render, screen } from '@testing-library/react'
import PlayersList from './players-list'

const mocksetSearchWord = jest.fn()
const mocksetModalState = jest.fn()
jest.mock('../../../store/store', () => ({
  useStore: () => ({
    setSearchWord: mocksetSearchWord,
    setModalState: mocksetModalState
  })
}))

describe('PlayersList', () => {
  const players = [
    {
      firstName: 'firstName1',
      lastName: 'lastName1',
      image: 'image1',
      attack: 10,
      defense: 20,
      skills: 30,
      idAuthor: 32,
      idPosition: 0,
      id: 125
    },
    {
      firstName: 'firstName2',
      lastName: 'lastName2',
      image: 'image2',
      attack: 100,
      defense: 90,
      skills: 70,
      idAuthor: 32,
      idPosition: 0,
      id: 126
    }
  ]

  test('should show players names', () => {
    render(<PlayersList players={players} />)
    expect(screen.getByText('FIRSTNAME1 LASTNAME1')).toBeVisible()
    expect(screen.getByText('FIRSTNAME2 LASTNAME2')).toBeVisible()
  })

  test('should show players attack', () => {
    render(<PlayersList players={players} />)
    expect(screen.getByText('10')).toBeVisible()
    expect(screen.getByText('100')).toBeVisible()
  })

  test('should show players defense', () => {
    render(<PlayersList players={players} />)
    expect(screen.getByText('20')).toBeVisible()
    expect(screen.getByText('90')).toBeVisible()
  })

  test('should show players skills', () => {
    render(<PlayersList players={players} />)
    expect(screen.getByText('30')).toBeVisible()
    expect(screen.getByText('70')).toBeVisible()
  })
})

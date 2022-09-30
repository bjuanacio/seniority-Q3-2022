import { act, renderHook } from '@testing-library/react-hooks'
import useApp from './use-app'
import PlayersService, { Player } from '../../services/player.service'

jest.mock('../../services/player.service')
const mockPlayersService = PlayersService as jest.Mocked<typeof PlayersService>

describe('useApp', () => {
  it('should toggleModal when calling toggleModal', () => {
    const { result } = renderHook(() => useApp())

    expect(result.current.showModal).toBe(false)
    act(() => {
      result.current.toggleModal()
    })
    expect(result.current.showModal).toBe(true)
  })

  it('should return players when PlayersService.getPlayers returns players', async () => {
    const players: Player[] = [
      {
        id: 1,
        firstName: 'John',
        lastName: 'Doe',
        image: 'https://www.google.com',
        attack: 1,
        defense: 1,
        skills: 1,
        idAuthor: 1,
        idPosition: 1
      }
    ]

    mockPlayersService.getPlayers.mockResolvedValue(players)

    const { result, waitForValueToChange } = renderHook(() => useApp())

    expect(result.current.players).toEqual([])

    await waitForValueToChange(() => result.current.players)

    expect(result.current.players).toEqual(players)
  })

  it('should change search when handleSearch is called', () => {
    const { result } = renderHook(() => useApp())

    expect(result.current.search).toBe('')
    act(() => {
      result.current.handleSearch('test')
    })
    expect(result.current.search).toBe('test')
  })

  it('should handleClickAdd and change isEdit, actualPlayer to null and toggle modal', () => {
    const { result } = renderHook(() => useApp())

    expect(result.current.isEdit).toBe(false)
    expect(result.current.actualPlayer).toBe(null)
    expect(result.current.showModal).toBe(false)
    act(() => {
      result.current.handleClickAdd()
    })
    expect(result.current.isEdit).toBe(false)
    expect(result.current.actualPlayer).toBe(null)
    expect(result.current.showModal).toBe(true)
  })

  it('should createPlayer when handleAddOrEdit is called', async () => {
    const player: Player = {
      id: 1,
      firstName: 'John',
      lastName: 'Doe',
      image: 'https://www.google.com',
      attack: 1,
      defense: 1,
      skills: 1,
      idAuthor: 1,
      idPosition: 1
    }

    mockPlayersService.createPlayer.mockResolvedValue(player)

    const { result } = renderHook(() => useApp())

    await act(async () => {
      await result.current.handleAddOrEdit(player)
    })

    expect(mockPlayersService.createPlayer).toBeCalledWith(player)
  })

  it('should editPlayer when handleAddOrEdit is called and isEdit', async () => {
    const player: Player = {
      id: 1,
      firstName: 'John',
      lastName: 'Doe',
      image: 'https://www.google.com',
      attack: 1,
      defense: 1,
      skills: 1,
      idAuthor: 1,
      idPosition: 1
    }

    mockPlayersService.updatePlayer.mockResolvedValue(true)

    const { result } = renderHook(() => useApp())

    act(() => {
      result.current.handleOnEditClick(player)
    })

    await act(async () => {
      await result.current.handleAddOrEdit(player)
    })

    expect(mockPlayersService.updatePlayer).toBeCalledWith(player)
  })
})

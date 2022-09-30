import { act, renderHook } from '@testing-library/react-hooks'
import { AUTHOR_ID } from '../../../../services/player.service'
import { NOT_FOUND_IMAGE } from '../../../../utils/constants'
import useModalBody from './use-modal-body'
import PlayerService from '../../../../services/player.service'

jest.mock('../../../../services/player.service')
const mockPlayerService = PlayerService as jest.Mocked<typeof PlayerService>

describe('useModalBody', () => {
  it('should return title and button', () => {
    const { result } = renderHook(() => useModalBody({ actualPlayer: null, isEdit: true }))

    expect(result.current.titleAndButton).toEqual({
      title: 'Editar Jugador',
      button: 'Editar'
    })
  })

  it('should return default player', () => {
    const { result } = renderHook(() => useModalBody({ actualPlayer: null, isEdit: true }))

    expect(result.current.player).toEqual({
      id: 0,
      attack: 55,
      defense: 55,
      firstName: '',
      idAuthor: AUTHOR_ID,
      idPosition: 0,
      image: NOT_FOUND_IMAGE,
      lastName: '',
      skills: 55
    })
  })

  it('should return positions', () => {
    const { result } = renderHook(() => useModalBody({ actualPlayer: null, isEdit: true }))

    expect(result.current.positions).toEqual([])
  })

  it('should return positions when PlayersService.getPositions returns positions', async () => {
    const positions = [
      { description: 'Goalkeeper', id: 1 },
      { description: 'Defender', id: 2 },
      { description: 'Midfielder', id: 3 },
      { description: 'Forward', id: 3 }
    ]

    mockPlayerService.getPositions.mockResolvedValue(positions)

    const { result, waitForValueToChange } = renderHook(() =>
      useModalBody({ actualPlayer: null, isEdit: true })
    )

    expect(result.current.positions).toEqual([])

    await waitForValueToChange(() => result.current.positions)

    expect(result.current.positions).toEqual(positions)
  })

  it('should change player when call handleChangeInput', () => {
    const { result } = renderHook(() => useModalBody({ actualPlayer: null, isEdit: true }))

    expect(result.current.player).toEqual({
      id: 0,
      attack: 55,
      defense: 55,
      firstName: '',
      idAuthor: AUTHOR_ID,
      idPosition: 0,
      image: NOT_FOUND_IMAGE,
      lastName: '',
      skills: 55
    })

    act(() => {
      result.current.handleChangeInput('John', 'firstName')
    })

    expect(result.current.player).toEqual({
      id: 0,
      attack: 55,
      defense: 55,
      firstName: 'John',
      idAuthor: AUTHOR_ID,
      idPosition: 0,
      image: NOT_FOUND_IMAGE,
      lastName: '',
      skills: 55
    })
  })
})

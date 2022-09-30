import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import PlayerModal from './player-modal'

const mocksetModalState = jest.fn()
let mockmodalState = 'add'
const mockaddPlayer = jest.fn()
const mockpositions = [{ id: 0, description: 'Delantero' }]
let mockselectedPlayerId = null as any
const mockplayers = [
  {
    firstName: 'firstName1',
    lastName: 'lastName1',
    image: 'http',
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
    image: 'img',
    attack: 100,
    defense: 90,
    skills: 70,
    idAuthor: 32,
    idPosition: 0,
    id: 126
  }
]
const mockeditPlayer = jest.fn()
const mocksetSelectedPlayerId = jest.fn()

jest.mock('../../../store/store', () => ({
  useStore: () => ({
    setModalState: mocksetModalState,
    modalState: mockmodalState,
    addPlayer: mockaddPlayer,
    positions: mockpositions,
    selectedPlayerId: mockselectedPlayerId,
    players: mockplayers,
    editPlayer: mockeditPlayer,
    setSelectedPlayerId: mocksetSelectedPlayerId
  })
}))

describe('PlayerModal', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })
  test('should render add mode', () => {
    render(<PlayerModal />)
    expect(screen.getByText('Agregar jugador')).toBeVisible()
    expect(screen.getByText('Agregar')).toBeVisible()
  })

  test('should render edit mode', () => {
    mockmodalState = 'edit'
    render(<PlayerModal />)
    expect(screen.getByText('Editar jugador')).toBeVisible()
    expect(screen.getByText('Editar')).toBeVisible()
  })

  test('button should start disabled', () => {
    mockmodalState = 'add'
    render(<PlayerModal />)
    userEvent.click(screen.getByText('Agregar'))
    expect(mockaddPlayer).toHaveBeenCalledTimes(0)
    expect(mockeditPlayer).toHaveBeenCalledTimes(0)
  })

  test('should edit player', () => {
    mockmodalState = 'edit'
    mockselectedPlayerId = 125
    render(<PlayerModal />)
    userEvent.click(screen.getByText('Editar'))
    expect(mockaddPlayer).toHaveBeenCalledTimes(0)
    expect(mockeditPlayer).toHaveBeenCalledTimes(1)
  })

  test('should close modal', () => {
    render(<PlayerModal />)
    expect(mocksetSelectedPlayerId).toHaveBeenCalledTimes(0)
    expect(mocksetModalState).toHaveBeenCalledTimes(0)
    userEvent.click(screen.getByText('X'))
    expect(mocksetSelectedPlayerId).toHaveBeenCalledTimes(1)
    expect(mocksetModalState).toHaveBeenCalledTimes(1)
    expect(mocksetSelectedPlayerId).toHaveBeenCalledWith(null)
    expect(mocksetModalState).toHaveBeenCalledWith('')
  })

  test('should show not found image', () => {
    mockselectedPlayerId = 126
    render(<PlayerModal />)
    expect(screen.getByText('NOT FOUND')).toBeVisible()
  })
})

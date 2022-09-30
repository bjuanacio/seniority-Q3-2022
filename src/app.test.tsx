import { cleanup, fireEvent, render, screen, waitFor } from '@testing-library/react'
import App from './app'
import { axiosMock } from './setupTests'
import { Player } from './shared/interfaces/player'
const playerExample: Player = {
  firstName: 'string',
  lastName: 'last',
  image: 'string',
  attack: 2,
  defense: 2,
  skills: 2,
  idAuthor: 2,
  idPosition: 2
}

describe('App component', () => {
  afterEach(() => {
    cleanup()
    jest.clearAllMocks()
  })
  beforeEach(() => {
    axiosMock.get.mockResolvedValueOnce({
      data: [playerExample, { ...playerExample, firstName: 'toSearch' }]
    })
  })
  test('Should render a title', () => {
    render(<App />)
    const title = screen.getByText('MI EQUIPO')
    expect(title).toBeInTheDocument()
  })
  test('should search players correctly', async () => {
    render(<App />)
    fireEvent.change(screen.getByRole('textbox'), {
      target: {
        value: 'toSearch'
      }
    })
    const toSearch = await waitFor(() => screen.findByText(/toSearch/i), {
      timeout: 3000
    })
    expect(toSearch).toBeInTheDocument()
  })
  test('Should update players', async () => {
    render(<App />)
    const buttons = await screen.findAllByTestId('edit-icon')
    fireEvent.click(buttons[0])
    fireEvent.change(screen.getByLabelText('firstName'), { target: { value: 'Example' } })
    fireEvent.change(screen.getByLabelText('lastName'), { target: { value: 'Example' } })
    fireEvent.change(screen.getByLabelText('image'), { target: { value: 'Example' } })
    fireEvent.change(screen.getByLabelText('position'), { target: { value: 'Example' } })
    fireEvent.change(screen.getByLabelText('attack'), { target: { value: 1 } })
    fireEvent.change(screen.getByLabelText('defense'), { target: { value: 2 } })
    fireEvent.change(screen.getByLabelText('skills'), { target: { value: 3 } })
    axiosMock.patch.mockResolvedValue({})
    axiosMock.get.mockResolvedValueOnce({
      data: [playerExample, { ...playerExample, firstName: 'Example' }]
    })
    fireEvent.click(screen.getByTestId('submit'))
    await waitFor(() => {
      expect(screen.getByText(/Example/i)).toBeTruthy()
    })
  })
  test('Should add players', async () => {
    render(<App />)
    fireEvent.click(screen.getByText(/Agregar/i))
    fireEvent.change(screen.getByLabelText('firstName'), { target: { value: 'Example' } })
    fireEvent.change(screen.getByLabelText('lastName'), { target: { value: 'Example' } })
    fireEvent.change(screen.getByLabelText('image'), { target: { value: 'Example' } })
    fireEvent.change(screen.getByLabelText('position'), { target: { value: 'Example' } })
    fireEvent.change(screen.getByLabelText('attack'), { target: { value: 1 } })
    fireEvent.change(screen.getByLabelText('defense'), { target: { value: 2 } })
    fireEvent.change(screen.getByLabelText('skills'), { target: { value: 3 } })
    axiosMock.post.mockResolvedValue({})
    axiosMock.get.mockResolvedValueOnce({
      data: [playerExample, { ...playerExample, firstName: 'Example' }]
    })
    fireEvent.click(screen.getByTestId('submit'))
    await waitFor(() => {
      expect(screen.getByText(/Example/i)).toBeTruthy()
    })
  })
  test('Should close modal', async () => {
    render(<App />)
    fireEvent.click(screen.getByText(/Agregar/i))
    fireEvent.click(screen.getByTestId('close-icon'))
    expect(screen.queryByText(/Agregar jugador/i)).toBeNull()
  })
  test('Should delete a player', async () => {
    render(<App />)
    axiosMock.delete.mockResolvedValue({ data: {} })
    fireEvent.click(screen.getByText(/Agregar/i))
    axiosMock.get.mockResolvedValueOnce({
      data: [playerExample]
    })
    await waitFor(() => {
      fireEvent.click(screen.getAllByTestId('delete-icon')[0])
    })

    await waitFor(() => {
      expect(screen.queryByText(/toSearch/i)).toBeNull()
    })
  })
})

import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from './app'
import axios from 'axios'

jest.mock('axios')
const axiosMock = axios as jest.Mocked<typeof axios>

describe('App component', () => {
  beforeEach(() => {
    axiosMock.get.mockResolvedValueOnce({
      data: [
        {
          id: 37,
          firstName: 'Leo',
          lastName: '1',
          image: 'https://cdn.forbes.co/2020/09/Lionel-Messi-EFE-1280X720.jpg',
          attack: 14,
          defense: 87,
          skills: 39,
          idAuthor: 31,
          idPosition: 0
        },
        {
          id: 56,
          firstName: 'Leo',
          lastName: '2',
          image: 'https://cdn.forbes.co/2020/09/Lionel-Messi-EFE-1280X720.jpg',
          attack: 96,
          defense: 87,
          skills: 99,
          idAuthor: 31,
          idPosition: 0
        },
        {
          id: 242,
          firstName: 'Leo',
          lastName: '3',
          image: 'https://cdn.forbes.co/2020/09/Lionel-Messi-EFE-1280X720.jpg',
          attack: 25,
          defense: 75,
          skills: 21,
          idAuthor: 31,
          idPosition: 0
        }
      ]
    })
  })

  it('Should render a title', () => {
    render(<App />)

    const title = screen.getByText('MI EQUIPO')
    expect(title).toBeInTheDocument()
  })

  it('Should render list of players', async () => {
    render(<App />)

    const title = screen.getByText('MI EQUIPO')
    expect(title).toBeInTheDocument()

    await waitFor(() => {
      expect(screen.getByText('LEO 1')).toBeInTheDocument()
      expect(screen.getByText('LEO 2')).toBeInTheDocument()
      expect(screen.getByText('LEO 3')).toBeInTheDocument()
    })
  })

  it('Search player', async () => {
    render(<App />)

    const title = screen.getByText('MI EQUIPO')
    expect(title).toBeInTheDocument()

    await waitFor(() => {
      expect(screen.getByText('LEO 1')).toBeInTheDocument()
      expect(screen.getByText('LEO 2')).toBeInTheDocument()
      expect(screen.getByText('LEO 3')).toBeInTheDocument()
    })

    userEvent.type(screen.getByPlaceholderText('Buscar por apellido'), '1')

    expect(screen.getByText('LEO 1')).toBeInTheDocument()
    expect(screen.queryByText('LEO 2')).not.toBeInTheDocument()
    expect(screen.queryByText('LEO 3')).not.toBeInTheDocument()
  })

  it('Should delete player', async () => {
    render(<App />)

    const title = screen.getByText('MI EQUIPO')
    expect(title).toBeInTheDocument()

    await waitFor(() => {
      expect(screen.getByText('LEO 1')).toBeInTheDocument()
      expect(screen.getByText('LEO 2')).toBeInTheDocument()
      expect(screen.getByText('LEO 3')).toBeInTheDocument()
    })

    const buttons = screen.getAllByTestId('delete')

    fireEvent.click(buttons[2])

    await waitFor(() => expect(screen.queryByText('LEO 3')).not.toBeInTheDocument())
  })

  it('Should create player', async () => {
    axiosMock.post.mockResolvedValueOnce({ data: { id: 4 } })
    render(<App />)

    const title = screen.getByText('MI EQUIPO')
    expect(title).toBeInTheDocument()

    await waitFor(() => {
      expect(screen.getByText('LEO 1')).toBeInTheDocument()
      expect(screen.getByText('LEO 2')).toBeInTheDocument()
      expect(screen.getByText('LEO 3')).toBeInTheDocument()
    })

    fireEvent.click(screen.getByText('Agregar'))

    await waitFor(() => expect(screen.getByText('Jugador')).toBeInTheDocument())

    userEvent.type(screen.getByPlaceholderText('Nombre'), 'LEO')
    userEvent.type(screen.getByPlaceholderText('Apellido'), '4')
    userEvent.type(
      screen.getByPlaceholderText('Imagen'),
      'https://cdn.forbes.co/2020/09/Lionel-Messi-EFE-1280X720.jpg'
    )

    fireEvent.click(screen.getByText('Agregarlo'))

    await waitFor(() => {
      expect(screen.getByText('LEO 4')).toBeInTheDocument()
      expect(screen.queryByText('Jugador')).not.toBeInTheDocument()
    })
  })

  it('Should edit player', async () => {
    axiosMock.patch.mockResolvedValueOnce({ data: { id: 4 } })
    render(<App />)

    const title = screen.getByText('MI EQUIPO')
    expect(title).toBeInTheDocument()

    await waitFor(() => {
      expect(screen.getByText('LEO 1')).toBeInTheDocument()
      expect(screen.getByText('LEO 2')).toBeInTheDocument()
      expect(screen.getByText('LEO 3')).toBeInTheDocument()
    })

    const buttons = screen.getAllByTestId('edit')

    fireEvent.click(buttons[2])

    await waitFor(() => expect(screen.getByText('Jugador')).toBeInTheDocument())

    userEvent.type(screen.getByPlaceholderText('Apellido'), ' EDITADO')

    fireEvent.click(screen.getByText('Editar'))

    await waitFor(() => {
      expect(screen.getByText('LEO 3 EDITADO')).toBeInTheDocument()
      expect(screen.queryByText('Jugador')).not.toBeInTheDocument()
    })
  })
})

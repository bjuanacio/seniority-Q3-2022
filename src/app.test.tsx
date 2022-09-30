import { cleanup, render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from './app'
import axiosInstance from './constants/axiosInstance'
import MockAdapter from 'axios-mock-adapter'

const mock = new MockAdapter(axiosInstance)

const players = [
  {
    id: 10,
    firstName: 'Leo',
    lastName: 'Messi',
    image:
      'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.amazon.in%2FVoorkoms-Lionel-Messi-Laminated-Sticker%2Fdp%2FB082GCNYYB&psig=AOvVaw3hIjSBMHejrDcVQ0-yzXNB&ust=1664634531364000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCKDf6oLdvPoCFQAAAAAdAAAAABAD',
    attack: 70,
    defense: 60,
    skills: 60,
    idAuthor: 41,
    idPosition: 0
  },
  {
    id: 51,
    firstName: 'Antonio',
    lastName: 'Valencia',
    image:
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.Wrzzlu8zu2uxjsOWEIFu4AHaFj%26pid%3DApi&f=1&ipt=8f38124a26b835a04763f849da9942cae8c4803f79edeffb4aabe7edd3b43766&ipo=images',
    attack: 80,
    defense: 90,
    skills: 90,
    idAuthor: 41,
    idPosition: 0
  }
]

beforeAll(() => {
  mock.reset()
})

afterEach(() => {
  cleanup()
})

const renderComponent = () => render(<App />)

describe('App component', () => {
  it('Should render a title', () => {
    renderComponent()

    const title = screen.getByText('MI EQUIPO')
    expect(title).toBeInTheDocument()
  })

  it('should filter by name', async () => {
    mock.onGet('/player').reply(200, players)
    renderComponent()

    const input = screen.getByPlaceholderText('BUSCAR POR NOMBRE')
    expect(input).toBeInTheDocument()

    await waitFor(() => {
      screen.getByText(/leo messi/i)
      screen.getByText(/antonio valencia/i)
    })

    userEvent.type(input, 'LEO')
    expect(screen.getByText(/leo messi/i)).toBeInTheDocument()
    expect(screen.queryByText(/antonio valencia/i)).not.toBeInTheDocument()
  })

  it('should add a new player to the list', async () => {
    renderComponent()

    const newPlayer = {
      firstName: 'Luis',
      lastName: 'Suarez',
      image: '',
      attack: 80,
      defense: 90,
      skills: 90,
      idAuthor: 41,
      idPosition: 0,
      id: 154
    }

    mock.onPost('/player').reply(201, newPlayer)
    const agregar = screen.getByText('Agregar')
    expect(agregar).toBeInTheDocument()
    userEvent.click(agregar)

    const nombre = screen.getByPlaceholderText('name')
    const apellido = screen.getByPlaceholderText('apellido')
    const imagen = screen.getByPlaceholderText('imagen')
    const posición = screen.getByPlaceholderText('posición')
    const ataque = screen.getByPlaceholderText('ataque')
    const defensa = screen.getByPlaceholderText('defensa')
    const skills = screen.getByPlaceholderText('skills')
    const agregarNuevo = screen.getByTestId('agregarNuevo')

    userEvent.type(nombre, 'Luis')
    userEvent.type(apellido, 'Suarez')
    userEvent.type(imagen, 'imagen de suarez')
    userEvent.type(posición, '0')
    userEvent.type(ataque, '55')
    userEvent.type(defensa, '67')
    userEvent.type(skills, '77')

    userEvent.click(agregarNuevo)

    await waitFor(() => {
      screen.getByText(/luis/i)
    })
  })
})

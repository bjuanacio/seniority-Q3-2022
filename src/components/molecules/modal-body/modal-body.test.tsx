import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Player } from '../../../services/player.service'
import ModalBody from './modal-body'

describe('ModalBody tests', () => {
  const onEditOrAdd = jest.fn()
  const onClose = jest.fn()
  const actualPlayer = null
  it('should render default ModalBody', () => {
    render(<ModalBody onEditOrAdd={onEditOrAdd} onClose={onClose} actualPlayer={actualPlayer} />)
    expect(screen.getByText('Agregar Jugador')).toBeInTheDocument()
  })

  it('should render isEdit modal', () => {
    render(
      <ModalBody isEdit onEditOrAdd={onEditOrAdd} onClose={onClose} actualPlayer={actualPlayer} />
    )
    expect(screen.getByText('Editar Jugador')).toBeInTheDocument()
  })

  it('should call onEditOrAdd when click on button and button is enabled after writting in inputs', () => {
    const filledPlayer: Player = {
      firstName: 'Ter',
      lastName: 'Stegen',
      image:
        'https://img.playbuzz.com/image/upload/q_auto:best,f_auto,fl_lossy,w_640,c_limit,dpr_2/v1554461220/add8ompbz4m8yox6rzfy.jpg',
      attack: 99,
      defense: 30,
      skills: 97,
      idAuthor: 42,
      idPosition: 5,
      id: 1
    }
    render(<ModalBody onEditOrAdd={onEditOrAdd} onClose={onClose} actualPlayer={filledPlayer} />)
    userEvent.click(screen.getByText('Agregar'))
    expect(onEditOrAdd).toHaveBeenCalledTimes(1)
  })

  it('should call onClose when click on close icon', () => {
    render(<ModalBody onEditOrAdd={onEditOrAdd} onClose={onClose} actualPlayer={actualPlayer} />)
    userEvent.click(screen.getByAltText('Cerrar'))
    expect(onClose).toHaveBeenCalledTimes(1)
  })
})

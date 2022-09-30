import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Modal from './modal'

describe('Modal tests', () => {
  const onClose = jest.fn()
  const onEditOrAdd = jest.fn()
  const actualPlayer = null
  it('should render default modal', () => {
    render(<Modal onClose={onClose} onEditOrAdd={onEditOrAdd} actualPlayer={actualPlayer} />)
    expect(screen.getByText('Agregar Jugador')).toBeInTheDocument()
  })

  it('should call onClose when click outside modal', () => {
    render(<Modal onClose={onClose} onEditOrAdd={onEditOrAdd} actualPlayer={actualPlayer} />)
    userEvent.click(screen.getByTestId('modal-testid'))
    expect(onClose).toHaveBeenCalled()
  })
})

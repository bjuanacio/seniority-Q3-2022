import { render, screen } from '@testing-library/react'
import ModalForm from './modal-form'

describe('Modal', () => {
  beforeEach(() => {
    render(
      <ModalForm
        title="Agregar jugador"
        closeModal={() => console.log('closeModal')}
        savePlayer={jest.fn()}
      />
    )
  })
  describe('when is mounted', () => {
    test('should has input for firstname, lastname, imagen and a select for position', () => {
      expect(screen.queryByLabelText(/nombre/i)).toBeInTheDocument()
      expect(screen.queryByLabelText(/apellido/i)).toBeInTheDocument()
      expect(screen.queryByLabelText(/imagen/i)).toBeInTheDocument()
      expect(screen.queryByLabelText(/posición/i)).toBeInTheDocument()
    })

    test('should has sliders for attack, defense and skills', () => {
      expect(screen.queryByLabelText(/ataque/i)).toBeInTheDocument()
      expect(screen.queryByLabelText(/defensa/i)).toBeInTheDocument()
      expect(screen.queryByLabelText(/skills/i)).toBeInTheDocument()
    })
  })
})

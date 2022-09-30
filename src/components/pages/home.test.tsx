import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Home from './home'
describe('Home', () => {
  beforeEach(() => {
    render(<Home />)
  })
  describe('when is mounted', () => {
    test('should has a title', () => {
      expect(screen.queryByText(/mi equipo/i)).toBeInTheDocument()
    })

    test('should has a search box', () => {
      expect(screen.queryByTestId('search-box')).toBeInTheDocument()
    })

    test('should has an add button', () => {
      expect(screen.queryByRole('button', { name: /agregar/i })).toBeInTheDocument()
    })

    test('modal is hidden', () => {
      expect(screen.queryByTestId('modal-form')).not.toBeInTheDocument()
    })
  })

  describe('when add button is pressed', () => {
    test('should display a modal', () => {
      const addBtn = screen.getByRole('button', { name: /agregar/i })
      userEvent.click(addBtn)
      expect(screen.queryByTestId('modal-form')).toBeInTheDocument()
    })
  })
})

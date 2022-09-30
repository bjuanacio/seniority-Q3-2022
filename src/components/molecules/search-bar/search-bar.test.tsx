import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import SearchBar from './search-bar'

const mocksetSearchWord = jest.fn()
const mocksetModalState = jest.fn()
jest.mock('../../../store/store', () => ({
  useStore: () => ({
    setSearchWord: mocksetSearchWord,
    setModalState: mocksetModalState
  })
}))

describe('SearchBar', () => {
  test('should render', () => {
    render(<SearchBar />)
    expect(screen.getByText('Agregar')).toBeVisible()
  })

  test('should show modal', () => {
    render(<SearchBar />)
    expect(mocksetModalState).toHaveBeenCalledTimes(0)
    userEvent.click(screen.getByText('Agregar'))
    expect(mocksetModalState).toHaveBeenCalledTimes(1)
    expect(mocksetModalState).toHaveBeenCalledWith('add')
  })

  //pichincha-input cannot be tested
  test.skip('should type text', () => {
    render(<SearchBar />)
    expect(mocksetModalState).toHaveBeenCalledTimes(0)
    const event = new Event('ichange', {
      target: { value: 'test' }
    } as any)
    document.dispatchEvent(event)
    expect(mocksetSearchWord).toHaveBeenCalledTimes(1)
  })
})

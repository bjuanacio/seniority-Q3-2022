import { render, screen } from '@testing-library/react'
import StoreProvider from './store'
describe('StoreProvider', () => {
  test('should render children', () => {
    render(<StoreProvider>Test</StoreProvider>)
    expect(screen.getByText('Test')).toBeVisible()
  })
})

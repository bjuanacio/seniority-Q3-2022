import { render, screen } from '@testing-library/react'
import Input from './input'

describe('Input', () => {
  test('should show text', () => {
    render(<Input value="test" />)
    expect(screen.getByTestId('input-testid')).toBeVisible()
  })

  //pichincha-input cannot be tested
  test.skip('should type text', () => {
    render(<Input value="test" />)
    const event = new Event('ichange', {
      target: { value: 'test' }
    } as any)
    expect(screen.getByTestId('input-testid')).toHaveValue('test')
  })
})

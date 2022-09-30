import { render, screen } from '@testing-library/react'
import { Select } from './select'

describe('Select component', () => {
  const options = [
    { id: '1', description: 'ONE' },
    { id: '2', description: 'TWO' }
  ]
  it('should render option', async () => {
    render(<Select options={options} />)
    const selectFound = await screen.findByText('ONE')
    expect(selectFound).toBeDefined()
    expect(selectFound).toBeInTheDocument()
  })
})

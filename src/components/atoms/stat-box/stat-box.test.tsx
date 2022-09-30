import { fireEvent, render, screen } from '@testing-library/react'
import ImageCard from './stat-box'

describe('Slider test', () => {
  it('should render a label', async () => {
    render(<ImageCard name="my-label" value={100} />)

    const element = screen.getByLabelText('my-label')

    expect(element).toBeInTheDocument()
  })
})

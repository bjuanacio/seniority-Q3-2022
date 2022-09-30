import { fireEvent, render, screen } from '@testing-library/react'
import ImageCard from './image-card'

describe('Slider test', () => {
  it('should render a label', async () => {
    render(<ImageCard label="my-label" />)

    const element = screen.getByLabelText('my-label')

    expect(element).toBeInTheDocument()
  })
})

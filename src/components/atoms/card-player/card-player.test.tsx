import { CardPlayer, CardPlayerProps } from './card-player'
import { StoreProvider } from '../store/store'
import { render, screen } from '@testing-library/react'

describe('Card player component', () => {
  it('Should render a component', () => {
    const mockResponse: CardPlayerProps = {
      id: 13,
      firstName: 'LIONEL',
      lastName: 'MESSI',
      image: 'https://i.pinimg.com/originals/13/fb/ff/13fbff1dc5c89a448149f8cc895edb93.jpg',
      attack: 95,
      defense: 34,
      skills: 91,
      idAuthor: 36,
      idPosition: 0
    }
    render(
      <StoreProvider>
        <CardPlayer {...mockResponse} />
      </StoreProvider>
    )

    const title = screen.getByText('95')
    expect(title).toBeInTheDocument()
  })
})

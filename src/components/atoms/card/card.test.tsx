import Card from './card'
import { fireEvent, render, screen } from '@testing-library/react'

describe('CardTest', () => {
  test('should first', () => {
    render(<Card atack={5} deffense={4} playerImage="tfuh" playerName="hvbde" skills={5} />)
  })
})

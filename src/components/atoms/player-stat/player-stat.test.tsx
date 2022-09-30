import { render, screen } from '@testing-library/react'
import PlayerStat from './player-stat'

describe('PlayerStat tests', () => {
  it('should render player stat based on props', () => {
    render(<PlayerStat stat="Ataque" value={95} />)
    expect(screen.getByText('Ataque')).toBeInTheDocument()
    expect(screen.getByText(95)).toBeInTheDocument()
  })
})

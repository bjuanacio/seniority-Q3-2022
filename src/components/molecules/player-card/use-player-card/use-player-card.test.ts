import { renderHook, act } from '@testing-library/react-hooks'
import usePlayerCard from './use-player-card'
import { PLAYERS } from '../../../../utils/constants/constants'

describe('usePlayerCard tests', () => {
  it('should return custom default value', () => {
    const { result } = renderHook(() =>
      usePlayerCard({
        playerStats: PLAYERS[0]
      })
    )

    expect(result.current.currentValue).toBe(PLAYERS[0])
  })
})

import { useEffect, useState } from 'react'
import { Player } from '../../../../types/types'

export interface UsePlayerCardArgs {
  playerStats: Player
  onChange?: (playerStats: Player) => void
}

function usePlayerCard(args?: UsePlayerCardArgs) {
  const [currentValue, setCurrentValue] = useState(args?.playerStats)

  useEffect(() => {
    setCurrentValue(currentValue)
  }, [args?.playerStats])

  return {
    currentValue
  }
}

export default usePlayerCard

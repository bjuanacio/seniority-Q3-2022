import { useEffect, useState } from 'react'
import { Player } from '../../../../types/types'

export interface UsePlayersListArgs {
  players: Player[]
}

function usePlayersList(args?: UsePlayersListArgs) {
  const [currentValue, setCurrentValue] = useState(args?.players)

  useEffect(() => {
    setCurrentValue(args?.players)
  }, [args?.players])

  return {
    currentValue
  }
}

export default usePlayersList

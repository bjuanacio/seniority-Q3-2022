import { useEffect, useMemo, useState } from 'react'
import PlayersService, {
  AUTHOR_ID,
  Player,
  PlayerPosition
} from '../../../../services/player.service'
import { NOT_FOUND_IMAGE } from '../../../../utils/constants'

interface UseModalBodyProps {
  isEdit?: boolean
  actualPlayer: Player | null
}

const emptyPlayer: Player = {
  id: 0,
  attack: 55,
  defense: 55,
  firstName: '',
  idAuthor: AUTHOR_ID,
  idPosition: 0,
  image: NOT_FOUND_IMAGE,
  lastName: '',
  skills: 55
}

const useModalBody = ({ actualPlayer, isEdit }: UseModalBodyProps) => {
  const [player, setPlayer] = useState<Player>(actualPlayer || emptyPlayer)
  const [positions, setPositions] = useState<PlayerPosition[]>([])

  const getPositions = async () => {
    const positionsResponse = (await PlayersService.getPositions()) || []
    setPositions(positionsResponse)
  }

  useEffect(() => {
    getPositions()
  }, [])

  const titleAndButton = isEdit
    ? {
        title: 'Editar Jugador',
        button: 'Editar'
      }
    : {
        title: 'Agregar Jugador',
        button: 'Agregar'
      }

  const handleChangeInput = (value: string | number, key?: keyof Player) => {
    if (key) {
      setPlayer({
        ...player,
        [key]: value
      })
    }
  }

  const isButtonEnabled = useMemo(() => {
    const { firstName, lastName, image, idPosition } = player
    return firstName && lastName && image && idPosition
  }, [player])

  return {
    titleAndButton,
    player,
    handleChangeInput,
    positions,
    isButtonEnabled
  }
}

export default useModalBody

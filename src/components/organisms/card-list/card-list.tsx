import axios from 'axios'
import { useEffect, useState } from 'react'
import Card from '../card/card'

interface IPlayer {
  id: number
  firstName: string
  lastName: string
  image: string
  attack: number
  defense: number
  skills: number
  idAuthor: number
  idPosition: number
}

function CardList() {
  const [Player, setPlayer] = useState<IPlayer[]>([])
  useEffect(() => {
    const url = 'https://api-exercise-q3.herokuapp.com/player'
    const config = {
      headers: {
        author: '49'
      }
    }
    axios(url, config).then((response) => setPlayer(response.data))
  }, [])

  return (
    <div className="card-list">
      {Player &&
        Player.map((player) => (
          <Card
            key={player.id}
            image={player.image}
            label={player.firstName + ' ' + player.lastName}
            stats={[
              { id: 1, name: 'Ataque', value: player.attack },
              { id: 2, name: 'Defensa', value: player.defense },
              { id: 3, name: 'Skill', value: player.skills }
            ]}
          />
        ))}
    </div>
  )
}

export default CardList

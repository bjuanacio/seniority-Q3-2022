import ApiCangular from '../../../Api/instance-crud'
import { useState, useEffect } from 'react'
import './card.scss'

export const Cards = () => {
  const [players, setplayers] = useState([])

  const receivePlayers = async () => {
    try {
      const { data } = await ApiCangular.get('/player', {
        headers: {
          author: 53
        }
      })
      if (data) setplayers(data)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    receivePlayers()
  }, [])

  return (
    <>
      {players &&
        players.map((player: any) => (
          <div key={`current-${player.id}`} className="card">
            <div className="card__header">
              <img className="card__header__img" src={player.image} alt="player" />
            </div>
            <div className="card__description">
              <div className="card__description-title">{player.firstname}</div>
              <div className="card__description-number">
                {[
                  { des: 'ataque', point: player.attack },
                  { des: 'defense', point: player.defense },
                  { des: 'skill', point: player.skill }
                ].map((points) => (
                  <div className="card__description-point">
                    <h5>{points.des}</h5>
                    <b>{points.point}</b>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
    </>
  )
}

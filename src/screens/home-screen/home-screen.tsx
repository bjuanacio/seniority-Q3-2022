import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { PlayerCard } from '../../components/organisms/player-card/player-card'
import './home-screen.scss'
import { RootState } from '../../store/store'
import { useEffect } from 'react'
import { fetchPlayers } from '../../services/user.service'
import { setFilterPlayersByName, setPlayers, toggleShowModal } from '../../store/slices/app-slice'
import { useDebouncedValue } from '../../hooks/use-debounced-value'
import { CreateEditModal } from '../../components/organisms/create-edit-modal/create-edit-modal'

export const HomScreen = () => {
  const { filteredPlayers, players, showModal } = useSelector((state: RootState) => state.app)
  const dispatch = useDispatch()

  const [playerName, setPlayerName] = useState('')

  const debouncedValue = useDebouncedValue(playerName)

  const onDebounce = (searchedName: string) => {
    dispatch(setFilterPlayersByName(searchedName))
  }

  useEffect(() => {
    onDebounce(debouncedValue)
  }, [debouncedValue])

  useEffect(() => {
    if (players.length == 0) {
      fetchPlayers()
        .then(({ data: fetchedPlayers }) => {
          dispatch(setPlayers(fetchedPlayers))
          dispatch(setFilterPlayersByName(''))
        })
        .catch(() => {
          window.alert('Hubo un problema al cargar los jugadores')
        })
    }
  }, [])

  useEffect(() => {
    setPlayerName('')
  }, [players])

  const handleCreateBtn = () => {
    dispatch(toggleShowModal())
  }

  return (
    <div className="home">
      <div className="home__title">MI EQUIPO</div>
      <div className="home__header">
        <div className="home__header__input">
          <input
            value={playerName}
            onChange={({ target }) => {
              setPlayerName(target.value)
            }}
            type="text"
            placeholder="Buscar por nombre"
          />
        </div>
        <button onClick={handleCreateBtn} className="home__header__add-button">
          Agregar
        </button>
      </div>
      <div className="home__list">
        {filteredPlayers.map((player, idx) => (
          <PlayerCard key={idx} player={player} />
        ))}
      </div>
      {showModal && <CreateEditModal />}
    </div>
  )
}

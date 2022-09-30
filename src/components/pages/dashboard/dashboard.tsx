import React from 'react'
import useDashboard from './use-dashboard/use-dashboard'
import PlayersList from '../../organism/players-list/players-list'
import PlayerForm from '../../organism/player-form/player-form'

const Dashboard = () => {
  const {
    playerList,
    filteredList,
    openForm,
    currentPlayer,
    filterList,
    editPlayer,
    deletePlayer,
    handleOpenForm,
    setopenForm
  } = useDashboard()

  return (
    <div>
      <div className="searchTask">
        <input
          type="text"
          placeholder="Buscar por nombre"
          onChange={(e) => filterList(e.target.value)}
        />
        <button type="button" onClick={() => setopenForm(true)}>
          Agregar
        </button>
      </div>
      <PlayersList players={filteredList} handleDelete={deletePlayer} handleEdit={editPlayer} />
      <PlayerForm show={openForm} handleClose={() => setopenForm(false)} />
    </div>
  )
}

export default Dashboard

import React from 'react'
import DeleteIcon from './../../assets/delete-icon.svg'
import EditIcon from './../../assets/edit-icon.svg'

export const CardsPlayer = ({
  players,
  setPlayers,
  messageNoPlayers,
  toggleDelete,
  togglEdit
}: {
  players: any
  setPlayers: any
  messageNoPlayers: any
  toggleDelete: any
  togglEdit: any
}) => {
  return (
    <table className="styled-table">
      <thead>
        <tr>
          <th scope="col">Nombre</th>
          <th scope="col">Apellido</th>
          <th scope="col">Posicion</th>
          <th scope="col">Imagen</th>
          <th scope="col">Ataque</th>
          <th scope="col">Defensa</th>
          <th scope="col">Skills</th>
          <th scope="col">Acciones</th>
        </tr>
      </thead>
      <tbody>
        {players && players.length > 0 ? (
          players.map(({ player, i }: { player: any; i: any }) => (
            <tr key={i} data-testid="idPlayer">
              <td data-testid="playerName">{player.name}</td>
              <td>
                {player.image.includes('https') ? (
                  <img
                    className="imgStyle"
                    src={player.image}
                    alt={player.name}
                    width={20}
                    height={20}
                  />
                ) : (
                  <p>{player.name}</p>
                )}
              </td>
              <td>{player.attack}</td>
              <td>{player.defense}</td>
              <td>
                <table className="intern-table">
                  <tbody>
                    <tr>
                      <td>
                        <img
                          src={EditIcon}
                          alt="edit-icon"
                          onClick={() => togglEdit(player.id)}
                          className="iconStyle"
                        />
                      </td>
                      <td>
                        <img
                          src={DeleteIcon}
                          alt="delete-icon"
                          onClick={() => toggleDelete(player.id)}
                          className="iconStyle"
                        />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td className="idConditionalTd"></td>
            <td className="idConditionalTd"></td>
            <td className="idConditionalTd">
              <p data-testid="playersMessage">{messageNoPlayers}</p>
            </td>
          </tr>
        )}
      </tbody>
    </table>
  )
}

import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import { Player, PlayerService } from './player.service'

const axiosMock = new MockAdapter(axios)

describe('Player Service', () => {
  const mockedPlayer: Player = {
    firstName: 'john',
    lastName: 'doe',
    image:
      'https://media.gettyimages.com/photos/lionel-messi-of-barcelona-celebrates-after-scoring-his-sides-second-picture-id955410340?s=2048x2048',
    attack: 30,
    defense: 40,
    skills: 20,
    idAuthor: 47,
    idPosition: 2,
    id: 18
  }

  it('should get all the players by author', async () => {
    axiosMock.onGet().reply(200, [mockedPlayer] as Player[])
    const players = await PlayerService.getPlayers()
    expect(players).toBeInstanceOf(Array)
    expect(players[0]).toEqual(mockedPlayer)
  })

  it('should create a player', async () => {
    const newMockedPlayer: Player = {
      firstName: 'john',
      lastName: 'doe',
      image:
        'https://media.gettyimages.com/photos/lionel-messi-of-barcelona-celebrates-after-scoring-his-sides-second-picture-id955410340?s=2048x2048',
      attack: 30,
      defense: 40,
      skills: 20,
      idAuthor: 47,
      idPosition: 2
    }

    axiosMock.onPost().reply(201, { ...newMockedPlayer, id: 777 })
    const playerCreated = await PlayerService.createPlayer(newMockedPlayer)
    expect(playerCreated).toEqual({ ...newMockedPlayer, id: 777 })
  })

  it('should update a player', async () => {
    const playerId = 18
    const updatedPlayer: Player = {
      ...mockedPlayer,
      attack: 50,
      id: undefined
    }

    axiosMock.onPatch().reply(200, { ...updatedPlayer, id: 18 })
    const playerUpdated = await PlayerService.updatePlayer(playerId, updatedPlayer)
    expect(playerUpdated).toEqual({ ...updatedPlayer, id: 18 })
  })

  it('should delete a player', async () => {
    const playerId = 18

    axiosMock.onDelete().reply(200, {
      affected: 1
    })
    const deleteConfirmation = await PlayerService.deletePlayer(playerId)
    expect(deleteConfirmation.affected).toEqual(1)
  })

  it('should search players by firstName or lastName', async () => {
    const playerName = 'Leonardo'

    axiosMock.onGet().reply(200, [mockedPlayer] as Player[])
    const searchedPlayers = await PlayerService.searchPlayers(playerName)
    expect(searchedPlayers).toBeInstanceOf(Array)
    expect(searchedPlayers[0]).toEqual(mockedPlayer)
  })
})

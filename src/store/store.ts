import { makeAutoObservable, runInAction } from 'mobx'
import { deletePlayer, getPlayers, postPlayer, updatePlayer } from './../services/user.service'

export interface IPlayer {
  id?: number
  firstName: string
  lastName: string
  image: string
  attack: number
  defense: number
  skills: number
  idAuthor: number
  idPosition: number
}

class Store {
  Players: IPlayer[] = []

  filteredPlayers: IPlayer[] = []

  constructor() {
    makeAutoObservable(this)
  }

  async getAllPlayers() {
    const allPlayers = await getPlayers()
    runInAction(() => {
      this.Players = allPlayers
      this.filteredPlayers = allPlayers
    })
  }

  async postPlayer(playerInfo: IPlayer) {
    const newPlayer = await postPlayer(playerInfo)
    runInAction(() => {
      this.Players = [...this.Players, newPlayer]
      this.filteredPlayers = [...this.filteredPlayers, newPlayer]
    })
  }

  async updatePlayer(playerInfo: IPlayer) {
    const updatedPlayer = await updatePlayer(playerInfo)
    if (updatedPlayer.status) {
      console.log({ updated: true })
    }
    runInAction(() => {
      const updatedPlayers = this.Players.map((player) =>
        player.id == playerInfo.id
          ? {
              firstName: playerInfo.firstName,
              lastName: playerInfo.lastName,
              image: playerInfo.image,
              attack: playerInfo.attack,
              defense: playerInfo.defense,
              skills: playerInfo.skills,
              idAuthor: player.idAuthor,
              idPosition: 0
            }
          : player
      )
      this.Players = updatedPlayers
      this.filteredPlayers = updatedPlayers
    })
  }

  async deletePlayer(id: number) {
    const deletedPlayer = await deletePlayer(id)
    if (deletedPlayer.affected) {
      console.log({ deleted: true })
    }
    runInAction(() => {
      const updatedDeleted = this.Players.filter((t) => t.id !== id)
      this.Players = updatedDeleted
      this.filteredPlayers = updatedDeleted
    })
  }

  filterPlayers(filter: string) {
    const filteredP = this.Players.filter(
      (t) =>
        t.firstName.toUpperCase().includes(filter.toUpperCase()) ||
        t.lastName.toUpperCase().includes(filter.toUpperCase())
    )
    runInAction(() => {
      this.filteredPlayers = filteredP
    })
  }
}
const store = new Store()
export default store

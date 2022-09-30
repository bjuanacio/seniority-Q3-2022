import axios from 'axios'

const API_URL = 'https://api-exercise-q3.herokuapp.com/player'

export interface Player {
  id?: number
  firstName: string
  lastName: string
  image: string
  attack: number
  defense: number
  skills: number
  idAutor?: number
}

export class PlayerService {
  static async getPlayers() {
    const { data } = await axios.get<Player[]>(API_URL, { headers: { author: '31' } })
    return data
  }

  static async deletePlayer(id: number) {
    await axios.delete(`${API_URL}/${id}`)
  }

  static async createPlayer(player: Player) {
    const { data } = await axios.post(API_URL, { ...player, idAuthor: 31 })
    return data as Player
  }

  static async updatePlayer(player: Player) {
    const { data } = await axios.patch(`${API_URL}/${player.id}`, { ...player, idAuthor: 31 })
    return data as Player
  }
}

import axios from 'axios'

const API_URL = process.env.REACT_APP_API_URL as string
const AUTHOR_ID = process.env.REACT_APP_AUTHOR_ID as string

export interface Player {
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
export interface DeleteConfirmation {
  raw: unknown[]
  affected: number
}

export class PlayerService {
  static async getPlayers() {
    const response = await axios.get<Player[]>(`${API_URL}player`, {
      headers: {
        author: AUTHOR_ID
      }
    })
    return response.data
  }

  static async searchPlayers(playerName: string) {
    const response = await axios.get<Player[]>(`${API_URL}player`, {
      headers: {
        author: AUTHOR_ID,
        search: playerName
      }
    })
    return response.data
  }

  static async createPlayer(newPlayer: Player) {
    const response = await axios.post<Player>(`${API_URL}player`, newPlayer)
    return response.data
  }
  static async updatePlayer(playerId: number, updatedPlayer: Player) {
    const response = await axios.patch<Player>(`${API_URL}player/${playerId}`, updatedPlayer)
    return response.data
  }
  static async deletePlayer(playerId: number) {
    const response = await axios.delete<DeleteConfirmation>(`${API_URL}player/${playerId}`)
    return response.data
  }
}

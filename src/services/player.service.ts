import axios from 'axios'

const API_URL = process.env.REACT_APP_API_URL as string
export const AUTHOR_ID = '42'

export interface Player {
  id: number
  firstName: string
  lastName: string
  image: string
  attack: number
  defense: number
  skills: number
  idAuthor: number | string
  idPosition: number
}

export interface PlayerPosition {
  id: number
  description: string
}

export default class PlayersService {
  static async getPlayers() {
    const headers = {
      author: AUTHOR_ID
    }
    try {
      const response = await axios.get<Player[]>(`${API_URL}/player`, { headers })
      return response.data
    } catch (error) {}
  }

  static async createPlayer(player: Player) {
    try {
      const response = await axios.post<Player>(`${API_URL}/player`, player)
      return response.data
    } catch (error) {}
  }

  static async getPositions() {
    try {
      const response = await axios.get<PlayerPosition[]>(`${API_URL}/position`)
      return response.data
    } catch (error) {}
  }

  static async deletePlayer(id: number) {
    try {
      await axios.delete(`${API_URL}/player/${id}`)
      return true
    } catch (error) {}
  }

  static async updatePlayer(player: Player) {
    try {
      await axios.patch(`${API_URL}/player/${player.id}`, player)
      return true
    } catch (error) {}
  }
}

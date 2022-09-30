import axios from 'axios'
import { Player, Position } from '../interfaces/interfaces'

const API_URL = process.env.REACT_APP_API_URL as string

const playerAxios = axios.create({
  baseURL: `${API_URL}/player`,
  headers: {
    author: '50'
  }
})
const positionsAxios = axios.create({ baseURL: `${API_URL}/position` })

export const fetchPlayers = () => playerAxios.get<Player[]>('')

export const fetchPlayerPositions = () => positionsAxios.get<Position[]>('')

export const editPlayer = (player: Player) =>
  playerAxios.patch(`/${player.id}`, {
    ...player
  })

export const removePlayer = (player: Player) => playerAxios.delete(`/${player.id}`)

export const createPlayer = (player: { [key: string]: string | number }) =>
  playerAxios.post(``, {
    ...player
  })

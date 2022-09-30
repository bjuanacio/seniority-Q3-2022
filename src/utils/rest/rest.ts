import axios, { AxiosError, AxiosRequestConfig } from 'axios'
import { Player } from '../../types/types'

const BASE_URL = 'https://api-exercise-q3.herokuapp.com/player'

const config = {
  headers: {
    author: '44'
  }
}

export const getPosition = async () => {
  try {
    const result = await axios.get('https://api-exercise-q3.herokuapp.com/position', config)
    return result.data
  } catch (error: any) {
    const e: AxiosError = error
    throw new Error(e.response?.data)
  }
}

export const getPlayers = async () => {
  try {
    const result = await axios.get(BASE_URL, config)
    return result.data
  } catch (error: any) {
    const e: AxiosError = error
    throw new Error(e.response?.data)
  }
}

export const deletePlayers = async (id: number) => {
  try {
    console.log('delete invoked')
    const result = await axios.delete(BASE_URL + '/' + id, config)
    return result.data
  } catch (error: any) {
    const e: AxiosError = error
    throw new Error(e.response?.data)
  }
}

export const postPlayers = async (game: Player) => {
  try {
    const result = await axios.post(BASE_URL, { ...game, idAuthor: 44 })
    return result.data
  } catch (error: any) {
    const e: AxiosError = error
    throw new Error(e.response?.data)
  }
}

export const patchPlayers = async (game: Player) => {
  try {
    const result = await axios.patch(BASE_URL, { ...game, idAuthor: 44 })
    return result.data
  } catch (error: any) {
    const e: AxiosError = error
    throw new Error(e.response?.data)
  }
}

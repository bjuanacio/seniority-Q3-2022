import axios from 'axios'
import axiosInstance from '../constants/axiosInstance'
import { AUTHOR_ID } from '../constants/baseUrl'
import { IPlayer } from '../store/store'

const API_URL = process.env.REACT_APP_API_URL as string

export interface FirebaseWrapper<T> {
  data: T
}

export interface User {
  username: string
  email: string
  token: string
}

export class UserService {
  static async getUsers() {
    const response = await axios.get<User[]>(API_URL)
    return response.data
  }
}

export const getPlayers = async () => {
  try {
    const { data } = await axiosInstance.get('/player', {
      headers: { author: `${AUTHOR_ID}` }
    })
    return data
  } catch (err) {
    console.log(err)
  }
}

export const postPlayer = async (playerInfo: IPlayer) => {
  try {
    const body = {
      firstName: playerInfo.firstName,
      lastName: playerInfo.lastName,
      image: playerInfo.image,
      attack: playerInfo.attack,
      defense: playerInfo.defense,
      skills: playerInfo.skills,
      idAuthor: `${AUTHOR_ID}`,
      idPosition: 0
    }
    const { data } = await axiosInstance.post('/player', body)
    return data
  } catch (err) {
    console.log(err)
  }
}

export const updatePlayer = async (playerInfo: IPlayer) => {
  try {
    const body = {
      firstName: playerInfo.firstName,
      lastName: playerInfo.lastName,
      image: playerInfo.image,
      attack: playerInfo.attack,
      defense: playerInfo.defense,
      skills: playerInfo.skills,
      idAuthor: `${AUTHOR_ID}`,
      idPosition: 0
    }
    const { data } = await axiosInstance.put(`/player/${playerInfo.id}`, body)
    return data
  } catch (err) {
    console.log(err)
  }
}

export const deletePlayer = async (id: number | undefined) => {
  try {
    const { data } = await axiosInstance.delete(`/player/${id}`)
    return data
  } catch (err) {
    console.log(err)
  }
}

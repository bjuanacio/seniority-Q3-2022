import axios from 'axios'

const API_URL = 'https://api-exercise-q3.herokuapp.com/player'

const createPlayer = async (playerData: unknown) => {
  const response = await axios.post(API_URL, playerData)
  return response.data
}

const getPlayers = async () => {
  const config = {
    headers: {
      author: 34
    }
  }
  const response = await axios.get(API_URL, config)
  console.log(response.data)
  return response.data
}

const playerService = {
  createPlayer,
  getPlayers
}

export default playerService

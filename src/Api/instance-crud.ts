import axios from 'axios'

const ApiCangular = axios.create({
  baseURL: 'https://api-exercise-q3.herokuapp.com'
})

export default ApiCangular

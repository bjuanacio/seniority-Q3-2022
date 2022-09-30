import axios from 'axios'
import { useState } from 'react'
import { AUTHOR_ID, BASE_URL } from '../constants/app'
import { ITodoCreate, ITodoEdit, IPlayerResponse } from '../models'

export const useList = () => {
  const [players, setPlayers] = useState<IPlayerResponse[]>([])

  const refetch = () => {
    axios
      .get(`${BASE_URL}`, {
        headers: {
          accept: 'application/json',
          author: AUTHOR_ID
        }
      })
      .then((res) => {
        const data = res.data

        setPlayers(data)
      })
  }

  const createTodo = async (todo: ITodoCreate) => {}

  const deleteTodo = async (id: number) => {}

  const editTodo = async (todo: ITodoEdit) => {}
  return { players, refetch, createTodo, deleteTodo, editTodo }
}

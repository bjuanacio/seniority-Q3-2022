import { FC, useMemo, useState } from 'react'

import './index.scss'
import { IPlayerResponse } from '../../../models'
import { Button } from '../../atoms/button'
import { Input } from '../../atoms/input'

import { Player } from '../../molecules/player'
import BaseModalWrapper from '../../molecules/modal/BaseModalWrapper'
export interface TodoListProps {
  todoList: IPlayerResponse[]
  updateList: (todos: IPlayerResponse[]) => void
  deleteTodo: (id: number) => Promise<void>
  setEditTodo: (arg: IPlayerResponse) => void
}

const PlayerList: FC<TodoListProps> = ({ todoList, updateList, deleteTodo, setEditTodo }) => {
  const [filter, setFilter] = useState('')

  const [showAll, setShowAll] = useState(true)

  const filteredTodoList = useMemo(() => {
    const auxList = showAll ? todoList : todoList.filter((td) => console.log(td))
    return auxList.filter((todo) => todo.firstName.toLowerCase().includes(filter.toLowerCase()))
  }, [todoList, filter, showAll])

  const toggleComplete = (todo: IPlayerResponse) => {
    const pos = todoList.findIndex((td) => td.id === todo.id)
    const auxList = [...todoList]
    auxList[pos] = todo
    updateList(auxList)
  }

  const handleDeleteTodo = async (id: number) => {
    await deleteTodo(id)
  }

  const [isModalVisible, setIsModalVisible] = useState(false)

  const toggleModal = () => {
    setIsModalVisible((wasModalVisible) => !wasModalVisible)
  }

  return (
    <>
      <div className="my-2 row">
        <Input
          width="20%"
          placeholder="Buscar por nombre"
          initialValue={filter}
          onChange={setFilter}
        />
        <Button width="20%" className="btn-dark" onClick={toggleModal}>
          Agregar
        </Button>
        <BaseModalWrapper isModalVisible={isModalVisible} onBackdropClick={toggleModal} />
      </div>

      <div>
        {filteredTodoList.map((todo, index) => (
          <Player
            key={todo.id}
            isEven={index % 2 === 0}
            todo={todo}
            toggleComplete={toggleComplete}
            deleteTodo={() => handleDeleteTodo(todo.id!)}
            setEditTodo={() => setEditTodo(todo)}
          />
        ))}
      </div>
    </>
  )
}

export default PlayerList

import React, { useState, useEffect } from 'react'
import { UserService, Player } from '../services/user.service'
/*import {
  userInput,
  emailInput,
  passwordInput,
  samePasswordInput,
  checkBoxInput
} from '../../../../utils/texts'
*/

interface InputValue {
  value?: string
  isError?: boolean
  info?: string
}

function useApp() {
  const [name, setName] = useState<InputValue>({ value: '' })
  const [mail, setMail] = useState<InputValue>({ value: '' })
  const [searchValue, setSearchValue] = useState<string>('')
  const [password, setPassword] = useState<InputValue>({ value: '' })
  const [samePassword, setSamePassword] = useState<InputValue>({ value: '' })
  const [options, setOptions] = useState<InputValue>({ value: '' })
  const [players, setPlayers] = useState<Player[] | undefined>()
  const [isOpen, setIsOpen] = useState<boolean>(false)

  let playerList = []

  function validateEmptyStrings(anyValue: string) {
    return anyValue.length === 0
  }

  const getDataPlayer = async () => {
    try {
      //console.log(userNameValue)
      const result = await UserService.getPlayers()
      console.log(result)
      setPlayers(result)
    } catch (error) {}
  }

  const openModal = () => {
    setIsOpen(true)
  }
  const closeModal = () => {
    setIsOpen(false)
  }

  const onChangeUserName = (event: { target: { value: string } }) => {
    const isError = validateEmptyStrings(event.target.value.toString())
    const newNameValue: InputValue = {
      value: event.target.value.toString(),
      isError,
      info: isError ? 'Requerido' : undefined
    }
    setName(newNameValue)
  }
  const onChangeSearch = (event: { target: { value: string } }) => {
    setSearchValue(event.target.value.toString())
  }

  if (!(searchValue.length > 0)) {
    playerList = [...players]
  } else {
    const searchValueLower = searchValue.toLowerCase()
    playerList = players.filter((player) => {
      const playerLower = player.firstName.toLowerCase()
      if (playerLower.includes(searchValueLower)) {
        return player
      }
    })
  }

  useEffect(() => {
    getDataPlayer()
  }, [])

  return {
    action: {
      openModal,
      closeModal,
      onChangeUserName,
      onChangeSearch
    },
    values: {
      name,
      players,
      playerList,
      password,
      samePassword,
      options,
      isOpen,
      searchValue
    }
  }
}

export { useApp }

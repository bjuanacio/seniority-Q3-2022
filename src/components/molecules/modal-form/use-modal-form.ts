import { useEffect, useState } from 'react'
import { PlayerService } from '../../../services/player.service'
import { SelectItem } from '../../../utils/interfaces/select-item'

const useModalForm = () => {
  const [positions, setPositions] = useState<SelectItem[]>([])
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    image: '',
    attack: 55,
    defense: 55,
    skills: 55,
    idPosition: 1
  })

  const onChangeData = (name: string, value: string) => {
    setFormData({
      ...formData,
      [name]: value
    })
  }

  useEffect(() => {
    const fetchPositions = async () => {
      const data = await PlayerService.getPositions()
      setPositions(data)
    }

    fetchPositions()
  }, [])

  return {
    formData,
    positions,
    onChangeData
  }
}

export default useModalForm

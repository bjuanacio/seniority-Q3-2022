import { useState } from 'react'

const useModal = () => {
  const [showModal, setShowModal] = useState(false)

  return { showModal, setShowModal }
}

export default useModal
export type ModalHookType = ReturnType<typeof useModal>

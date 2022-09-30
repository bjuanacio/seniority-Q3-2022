/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getPlayers } from '../../../features/playerSlice'
import { AppDispatch } from '../../../app/store'

function Players() {
  const { players } = useSelector((state: any) => state.players)

  const dispatch = useDispatch<AppDispatch>()

  useEffect(() => {
    dispatch(getPlayers())
  }, [dispatch])

  return (
    <>
      <div className="Players">
        <h1>Data</h1>
      </div>
    </>
  )
}

export default Players

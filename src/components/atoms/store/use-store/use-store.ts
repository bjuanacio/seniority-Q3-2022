import { useSelector, useDispatch } from 'react-redux'
import { increment, clear } from '../slice/slider.slice'
import { search } from '../slice/player.slice'

export const UseStoreJSI = () => {
  const count = useSelector((state: any) => state.counter.count)
  const valueSearch = useSelector((state: any) => state.player.valueSearch)
  const dispatch = useDispatch()
  return {
    count,
    increment: (value: number) => dispatch(increment(value)),
    clear: () => dispatch(clear()),
    search: (value: string) => dispatch(search(value)),
    valueSearch
  }
}

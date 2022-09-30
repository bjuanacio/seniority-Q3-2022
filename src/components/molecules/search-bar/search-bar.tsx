import { useStore } from '../../../store/store'
import Button from '../../atoms/button/button'
import Input from '../../atoms/input/input'
import { Styles } from './search-bar.styles'

const SearchBar = () => {
  const { setSearchWord, setModalState } = useStore()

  return (
    <Styles>
      <Input onChange={setSearchWord} />
      <Button onClick={() => setModalState('add')} size="large">
        Agregar
      </Button>
    </Styles>
  )
}

export default SearchBar

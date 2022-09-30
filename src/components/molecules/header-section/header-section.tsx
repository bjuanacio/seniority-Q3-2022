// import PlusIcon from '../../../assets/icons/PlusIcon'
// import Button from '../../common/Button/Button'
// import InputSearch from '../../common/InputSearch/InputSearch'
// import useHeaderSection from './useHeaderSection/useHeaderSection'
// import './HeaderSection.styles.css'

import Button from '../../atoms/button/button'
import InputSearch from '../../atoms/input/input'
import { HeaderContainer } from './header-section.styles'
import useHeaderSection from './useHeaderSection/useHeaderSection'

function HeaderSection() {
  const {
    actions: { handleSearch, handleOpenPlayerForm }
  } = useHeaderSection()

  return (
    <HeaderContainer>
      <header className="header">
        <h1 className="app__title">MI EQUIPO</h1>
        <div className="header__container">
          <InputSearch onSearch={handleSearch} />
          <Button onClick={() => {}}>Agregar</Button>
        </div>
      </header>
    </HeaderContainer>
  )
}

export default HeaderSection

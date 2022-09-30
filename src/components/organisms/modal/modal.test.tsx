import { fireEvent, render, screen } from '@testing-library/react'
import BodyModal from '../../molecules/body-modal/body-modal'
import Modal from './modal'

describe('Modal test', () => {
  it('should render a slider with a dafultValue', async () => {
    render(<Modal title="Agregar titulo" />)

    const value = screen.getByText('Agregar titulo')
    expect(value).toBeInTheDocument()
  })

  it('should run a function on click', () => {
    const handleChangeName = jest.fn()
    const handleChangeImage = jest.fn()
    const handleChangeLastName = jest.fn()

    render(
      <BodyModal
        valueName="D"
        valueLastName="R"
        valueImage="http"
        handleChangeName={handleChangeName}
        handleChangeImage={handleChangeImage}
        handleChangeLastName={handleChangeLastName}
      />
    )

    const inputName = screen.getByDisplayValue('D')
    const inputLastName = screen.getByDisplayValue('R')
    const inputImage = screen.getByDisplayValue('http')


    fireEvent.change(inputName, {target: {value: '23'}})
    fireEvent.change(inputLastName, {target: {value: 'Ra'}})
    fireEvent.change(inputImage, {target: {value: 'https://'}})

    expect(handleChangeName).toHaveBeenCalled()
    expect(handleChangeLastName).toHaveBeenCalled()
    expect(handleChangeImage).toHaveBeenCalled()
  })
})

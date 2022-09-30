import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Select from './select'

describe('Select tests', () => {
  it('should render select with default options', () => {
    render(<Select selectedValue={0} />)
    expect(screen.getByRole('combobox')).toBeInTheDocument()
    expect(screen.getByText('Portero')).toBeInTheDocument()
  })

  it('should render select with custom options', () => {
    render(
      <Select
        selectedValue={0}
        options={[
          { id: 1, description: 'test 1' },
          { id: 1, description: 'test 2' },
          { id: 1, description: 'test 3' },
          { id: 1, description: 'test 4' }
        ]}
      />
    )
    expect(screen.getByRole('combobox')).toBeInTheDocument()
    expect(screen.getByText('test 1')).toBeInTheDocument()
  })

  it('should call onChange', () => {
    const onChange = jest.fn()
    render(<Select selectedValue={0} onChange={onChange} />)
    const select = screen.getByRole('combobox')
    userEvent.selectOptions(select, 'Defensa')
    expect(onChange).toHaveBeenCalled()
    expect(onChange).toHaveBeenCalledWith('2', 'idPosition')
  })

  it('should not call onChange', () => {
    const onChange = jest.fn()
    render(<Select selectedValue={0} />)
    const select = screen.getByRole('combobox')
    userEvent.selectOptions(select, 'Defensa')
    expect(onChange).not.toHaveBeenCalled()
  })
})

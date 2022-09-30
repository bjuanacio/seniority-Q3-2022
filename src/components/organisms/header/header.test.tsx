import { render, screen } from '@testing-library/react'
import { Header, HeaderProps } from './header'

describe('Header organisms', () => {
  const renderHeader = (props: HeaderProps) => {
    return render(<Header {...props} />)
  }

  it('should render', () => {
    renderHeader({ title: 'mi titulo' })

    const header = screen.getByText('mi titulo')

    expect(header).toBeInTheDocument()
  })
})

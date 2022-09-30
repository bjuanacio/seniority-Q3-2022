import { render } from '@testing-library/react'
import { SearcherInput } from './SearcherInput'

describe('Searcher input', () => {
  test('Should match snapshot', () => {
    const input = render(<SearcherInput onChange={() => {}} />)

    expect(input).toMatchSnapshot()
  })
  test('Should render with name', () => {
    const input = render(<SearcherInput onChange={() => {}} name="name" />)
    expect(input).toMatchSnapshot()
  })
})

import { render } from '@testing-library/react'
import { SearcherInput } from './SearcherInput'

describe('Searcher input', () => {
  test('Should match snapshot', () => {
    const input = render(<SearcherInput onChange={() => {}} />)

    expect(input).toMatchSnapshot()
  })
})

import { renderHook, act } from '@testing-library/react-hooks'
import { useValidation } from './use-validation'

describe('useValidation hook', () => {
  it('should be a funtion', () => {
    expect(typeof useValidation).toBe('function')
  })

  const renderUseValidation = (validationFunction: (input: string) => boolean) => {
    return renderHook(() => useValidation(validationFunction))
  }

  it('should return a valid input first use', () => {
    const { result } = renderUseValidation((input) => typeof input === 'string')

    expect(result.current.isValid).toBe(true)
  })

  it('should return an invalid input on check', () => {


    const { result } = renderUseValidation((input) => input.length < 2)

    act(() => {
        result.current.validate('over 2 chars')
    })

    expect(result.current.isValid).toBe(false)
  })
})

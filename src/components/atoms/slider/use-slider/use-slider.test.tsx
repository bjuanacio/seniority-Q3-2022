import { renderHook, act } from '@testing-library/react-hooks'
import useSlider from './use-slider'
import { StoreProvider } from '../../store/store'

describe('useSlider tests', () => {
  it('should return default value', () => {
    const wrapper = ({ children }: any) => {
      return <StoreProvider>{children}</StoreProvider>
    }
    const { result } = renderHook(() => useSlider(), { wrapper })
    expect(result.current.count).toBe(25)
  })

  it('should return custom default value', () => {
    const wrapper = ({ children }: any) => {
      return <StoreProvider>{children}</StoreProvider>
    }
    const { result } = renderHook(
      () =>
        useSlider({
          defaultValue: 11
        }),
      { wrapper }
    )

    expect(result.current.count).toBe(25)
  })

  it('should execute change the value', () => {
    const wrapper = ({ children }: any) => {
      return <StoreProvider>{children}</StoreProvider>
    }
    const { result } = renderHook(() => useSlider(), { wrapper })

    act(() => {
      result.current.handleCurrentValue('11')
    })

    expect(result.current.count).toBe(11)
  })

  it('should execute onChange function', () => {
    const mockOnChange = jest.fn()
    const wrapper = ({ children }: any) => {
      return <StoreProvider>{children}</StoreProvider>
    }
    const { result } = renderHook(
      () =>
        useSlider({
          onChange: mockOnChange
        }),
      { wrapper }
    )

    act(() => {
      result.current.handleCurrentValue('11')
    })

    expect(mockOnChange).toBeCalledWith(11)
  })
})

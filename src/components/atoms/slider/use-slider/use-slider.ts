import { UseStoreJSI } from '../../store/use-store/use-store'

export interface UseSliderArgs {
  value?: number
  defaultValue?: number
  onChange?: (value: number) => void
}

function useSlider(args?: UseSliderArgs) {
  const { count, increment } = UseStoreJSI()

  const handleCurrentValue = (valueTarget: string) => {
    const valueSlider = Number(valueTarget)

    if (args?.onChange) args?.onChange(valueSlider)
    increment(valueSlider)
  }

  return {
    count,
    handleCurrentValue
  }
}

export default useSlider

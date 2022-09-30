import { useEffect, useState } from 'react'

export interface UseSliderArgs {
  value?: number
  defaultValue?: number
  onChange?: (value: React.ChangeEvent<HTMLInputElement>) => void
}

const DEFAULT_VALUE = 55

function useSlider(args?: UseSliderArgs) {
  const [currentValue, setCurrentValue] = useState(args?.defaultValue ?? DEFAULT_VALUE)

  useEffect(() => {
    setCurrentValue(args?.value || args?.defaultValue || DEFAULT_VALUE)
  }, [args?.value])

  const handleCurrentValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (args?.onChange) args?.onChange(e)

    setCurrentValue(Number(e.target.value))
    return e.target.value
  }

  return {
    currentValue,
    handleCurrentValue
  }
}

export default useSlider

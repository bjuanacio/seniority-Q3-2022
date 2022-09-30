import { FC } from 'react'
import { UseStoreJSI } from '../store/use-store/use-store'
import './slider.scss'
import useSlider from './use-slider/use-slider'

export interface SliderProps {
  label?: string
  value?: number
  defaultValue?: number
  onChange?: (value: number) => void
}

const MAX_RANGE = 100
const MIN_RANGE = 0

const Slider: FC<SliderProps> = ({ label, value, defaultValue, onChange }) => {
  const { handleCurrentValue } = useSlider({
    defaultValue,
    onChange,
    value
  })

  const { count } = UseStoreJSI()

  return (
    <div className="slider">
      <div className="slider__input-container">
        {label && (
          <label className="slider__label" htmlFor={label}>
            {label}
          </label>
        )}
        <div className="slider__input-container-value">
          <input
            className="slider__input"
            type="range"
            id={label}
            name={label}
            value={count}
            min={MIN_RANGE}
            max={MAX_RANGE}
            onChange={(e) => handleCurrentValue(e.target.value)}
          />
          <span className="slider__value">{count}</span>
        </div>
      </div>
    </div>
  )
}

export default Slider

import { FC } from 'react'
import { Player } from '../../../services/player.service'
import './slider.scss'
import useSlider from './use-slider/use-slider'

export interface SliderProps {
  label?: string
  value?: number
  defaultValue?: number
  onChange?: (value: number, name: keyof Player) => void
  name?: keyof Player
}

const MAX_RANGE = 100
const MIN_RANGE = 0

const Slider: FC<SliderProps> = ({ label, value, defaultValue, onChange, name }) => {
  const { currentValue, handleCurrentValue } = useSlider({
    defaultValue,
    onChange,
    value,
    name
  })

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
            value={currentValue}
            min={MIN_RANGE}
            max={MAX_RANGE}
            onChange={(e) => handleCurrentValue(e.target.value)}
          />
          <span className="slider__value">{currentValue}</span>
        </div>
      </div>
    </div>
  )
}

export default Slider

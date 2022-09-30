import { FC } from 'react'
import './stat-box.scss'

export interface StatBoxProps {
  name?: string
  value?: number
}

const StatBox: FC<StatBoxProps> = ({ name, value }) => {
  return (
    <div className="stat-box">
      <div>
        <h5 className="stat-box__text">{name ?? ''}</h5>
      </div>
      <div>
        <h3 className="stat-box__text">{value ?? ''}</h3>
      </div>
    </div>
  )
}

export default StatBox

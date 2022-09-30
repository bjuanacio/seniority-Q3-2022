import { FC } from 'react'
import StatBox from '../../atoms/stat-box/stat-box'
import './stats-card.scss'

interface StatBoxProps {
  id: number
  name?: string
  value?: number
}

export interface StatsCardProps {
  stats: StatBoxProps[]
}

const StatsCard: FC<StatsCardProps> = ({ stats }) => {
  return (
    <div className="stat-card">
      {stats?.map((element) => (
        <StatBox key={element.id} name={element.name} value={element.value} />
      ))}
    </div>
  )
}

export default StatsCard

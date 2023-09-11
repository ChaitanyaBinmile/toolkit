import React from 'react'
import { useAppSelector } from '../redux/hooks'

export const DisplayComponent:React.FC = () => {
    const count = useAppSelector(s=>s.counter.value)
  return (
    <div>{count} from component</div>
  )
}

import React from 'react'
import "./line.css"
import { cn } from '@bem-react/classname'

const Line = ({mods}) => {
    const cnLine = cn("Line")
  return (
    <div className={cnLine({...mods})}></div>
  )
}

export default Line
import React from 'react'
import "./line.css"
import { cn } from '@bem-react/classname'

const Line = ({className, mods}) => {
    const cnLine = cn("Line")
  return (
    <div className={cnLine({...mods}, [className])}></div>
  )
}

export default Line
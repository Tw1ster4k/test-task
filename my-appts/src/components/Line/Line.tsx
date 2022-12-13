import React from 'react'
import "./Line.css"
import { cn } from '@bem-react/classname'

interface TypeLine{
    className?: string,
    mods?: object
}

const Line = ({className, mods} : TypeLine ) => {
    const cnLine = cn("Line")
  return (
    <div className={cnLine({...mods}, [className])}></div>
  )
}

export default Line

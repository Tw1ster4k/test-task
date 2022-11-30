import React from 'react'
import "./title.css"
import { cn } from '@bem-react/classname'

const Title = ({mods, text , className}) => {
    const cnTitle = cn('Title')
  return (
    <div className={cnTitle({...mods}, [className])}>{text}</div>
  )
}

export default Title
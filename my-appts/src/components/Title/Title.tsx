import React from 'react'
import { cn } from '@bem-react/classname'
import "./Title.css"

interface TypeTitle{
    mods?: object,
    className?: string,
    text: string
}


const Title = ({mods, text , className} : TypeTitle ) => {
    const cnTitle = cn('Title')
  return (
    <div className={cnTitle({...mods}, [className])}>{text}</div>
  )
}

export default Title
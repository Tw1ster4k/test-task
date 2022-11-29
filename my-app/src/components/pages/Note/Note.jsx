import React from 'react'
import "./note.css"
import { cn } from '@bem-react/classname'

const Note = ({className, mods, text}) => {
    const cnNote = cn("Note")
  return (
    <div className={cnNote({...mods}, [className])}>{text}</div>
  )
}

export default Note
import React from 'react'
import "./note.css"
import { cn } from '@bem-react/classname'

const Note = ({mods, text}) => {
    const cnNote = cn("Note")
  return (
    <div className={cnNote({...mods})}>{text}</div>
  )
}

export default Note
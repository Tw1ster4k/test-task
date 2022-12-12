import { cn } from '@bem-react/classname'
import "./Note.css"

interface TypeNote {
    className?: string,
    mods?: object,
    text: string
}

const Note = ({className, mods, text} : TypeNote ) => {
    const cnNote = cn("Note")
  return (
    <div className={cnNote({...mods}, [className])}>{text}</div>
  )
}

export default Note
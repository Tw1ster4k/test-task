import { cn } from '@bem-react/classname'
import "./Button.css"

interface TypeButton{
    className?: string,
    mods?: object,
    text: string
} 

const Button = ({className, mods, text} : TypeButton ) => {
    const cnButton = cn("Button")
  return (
   <button className={cnButton({...mods}, [className])}>
       {text}
   </button>
  )
}

export default Button
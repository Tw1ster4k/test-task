import React from 'react'
import { cn } from '@bem-react/classname'
import "./button.css"

const Button = ({className, mods, text}) => {
    const cnButton = cn("Button")
  return (
   <button className={cnButton({...mods}, [className])}>
       {text}
   </button>
  )
}

export default Button
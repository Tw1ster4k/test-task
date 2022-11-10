import React from 'react'
import { cn } from '@bem-react/classname'
import "./button.css"

const Button = ({mods, text}) => {
    const cnButton = cn("Button")
  return (
   <button className={cnButton({...mods})}>
       {text}
   </button>
  )
}

export default Button
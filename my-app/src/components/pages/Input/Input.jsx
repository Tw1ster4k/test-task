import React from 'react'
import "./input.css"
import { cn } from '@bem-react/classname'

const Input = ({mods , text}) => {
    const cnInput = cn("Input");
  return (
    <input className={cnInput({...mods})} placeholder={text} type={mods.type}/>
  )
}

export default Input
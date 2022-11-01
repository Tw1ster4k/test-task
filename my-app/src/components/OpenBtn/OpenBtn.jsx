import React from 'react'
import "./button.css"
import { cn } from '@bem-react/classname'

const OpenBtn = ({getData}) => {
    const open = cn('Open')
  return (
    <button className={open()} onClick={() => getData()}>Открыть</button>
  )
}

export default OpenBtn
import React from 'react'
import { cn } from '@bem-react/classname'
import "./button.css"

const CloseBtn = ({setActive}) => {
    const close = cn('Close')
  return (
    <button className={close()} onClick={() => setActive(false)}>Закрыть</button>
  )
}

export default CloseBtn
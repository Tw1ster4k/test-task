import React from 'react'
import { cn } from '@bem-react/classname'
import "./images.css"

const Images = ({mods, imgurl}) => {
    const cnImage = cn("Image")
  return (
        <img src={imgurl} className={cnImage({...mods})} />
  )
}

export default Images
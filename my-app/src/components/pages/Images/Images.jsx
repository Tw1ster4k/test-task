import React from 'react'
import { cn } from '@bem-react/classname'
import "./images.css"

const Images = ({className ,mods, imgurl}) => {
    const cnImage = cn("Image")
  return (
        <img src={imgurl} className={cnImage({...mods}, [className])} alt={'sss'}/>
  )
}

export default Images
import React from 'react'
import { cn } from '@bem-react/classname'
import "./cardimg.css"
import Images from '../Images/Images'
import Note from '../Note/Note'

const CardImg = ({imgurl, imgtitle, body}) => {
    const cnCardImg = cn("CardImg")
  return (
    <div className={cnCardImg()}>
        <Images mods={{size: "m", direction:"up"}} imgurl={imgurl} />
        <Images mods={{size:"s", direction:'centerCard'}} imgurl={imgtitle}/>
        <div className={cnCardImg("Info")}>
        <Note mods={{size:"sm", color:"purple", textAlign:"center"}} text={body} />
        </div>
    </div>
  )
}

export default CardImg
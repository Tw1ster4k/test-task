import React from 'react'
import { cn } from '@bem-react/classname'
import './card.css'
import Images from '../Images/Images'
import Title from '../Title/Title'
import Note from '../Note/Note'
import Line from '../Line/Line'

const Card = ({imgurl, title, body, explore}) => {
    const cnCard = cn("Card")
  return (
    <div className={cnCard()} >
        <div className={cnCard("Content")}>
        <Images imgurl={imgurl} mods={{direction:"left"}}/>
        <Title mods={{size:"s", direction:"rightOfIcon", color:"white"}} text={title} />
        <Note mods={{size:'sl', color:"white" , direction:"underImg"}} text={body}/>
        <Note mods={{size:'s', color:"white" , direction:"underText"}} text={explore}/>
        <Line mods={{color:"white", size:"ma", direction:"endCard"}} />
        </div>
    </div>
  )
}

export default Card
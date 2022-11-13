import React from 'react'
import { cn } from '@bem-react/classname'
import "./block.css"
import Images from '../Images/Images'
import Title from '../Title/Title'
import Note from '../Note/Note'

const Block = ({imgurl, title, body}) => {
    const cnBlock = cn('Block')
  return (
    <div className={cnBlock()}>
         <Images imgurl={imgurl} mods={{size:'sm', direction:"center"}}/>
                <Title mods={{size:"sm", textAlign:'center', direction:"underImg"}} text={title} />
                    <Note mods={{size:'s', textAlign: 'center', direction:"lover"}} text={body}/>
    </div>
  )
}

export default Block
import React from 'react'
import { cn } from '@bem-react/classname'
import "./StastBlock.css"
import Title from '../../pages/Title/Title'
import Note from '../../pages/Note/Note'

const StatsBlock = ({title, body, secondBody}) => {
    const cnStatsBlock = cn("StatsBlock")
  return (
    <div className={cnStatsBlock()}>
        <Title mods={{size:"mm"}} className={cnStatsBlock("Title")} text={title}/>
        <Note  mods={{size:"s"}} className={cnStatsBlock("Body")} text={body}/>
        <Note  mods={{size:"s"}} className={cnStatsBlock("SecondBody")} text={secondBody}/>
    </div>
  )
}

export default StatsBlock
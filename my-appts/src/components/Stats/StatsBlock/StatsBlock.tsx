import { cn } from '@bem-react/classname'
import Note from '../../Note/Note'
import Title from '../../Title/Title'
import "./StatsBlock.css"

interface TypeStatsBlock{
    title: string,
    body: string,
    secondBody: string
}

const StatsBlock = ({title, body, secondBody} : TypeStatsBlock ) => {
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
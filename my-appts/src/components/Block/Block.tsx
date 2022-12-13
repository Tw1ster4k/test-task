import { cn } from '@bem-react/classname'
import "./Block.css"
import Image from '../Image/Image'
import Title from '../Title/Title'
import Note from '../Note/Note'

interface TypeBlock{
    imgurl: string,
    title: string,
    body: string
}


const Block = ({imgurl, title, body} : TypeBlock ) => {
    const cnBlock = cn('Block')
  return (
    <div className={cnBlock()}>
         <Image imgurl={imgurl} mods={{size:'sm'}} className={cnBlock("Image")}/>
                <Title mods={{size:"sm", textAlign:'center'}} className={cnBlock("Title")} text={title} />
                    <Note mods={{size:'s', textAlign: 'center'}} className={cnBlock("Note")} text={body}/>
    </div>
  )
}

export default Block
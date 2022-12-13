import { cn } from "@bem-react/classname"
import Title from "../../Title/Title"
import { Link } from "react-router-dom"
import Note from "../../Note/Note"
import "./BlockFooter.css"

interface TypeBlockFooter{
   title?: string,
   titleNote?: string,
   desc: string[]
}


const BlockFooter = ({title, titleNote, desc} : TypeBlockFooter) => {
    const cnBlockFooter = cn("BlockFooter")
    return (
      <div className={cnBlockFooter()}>
         { title ?
             <Link to="#" className={cnBlockFooter("Link")} ><Title mods={{size: "sm", color:"white"}} className={cnBlockFooter("Title")} text={title} /></Link> :
             <Link to="#" className={cnBlockFooter("Link")} >
              <Note mods={{size:"s", color:"white"}} text={titleNote} className={cnBlockFooter("UnderNote")} />
              </Link>
          }
          {desc.map((el, index) =>
          index === 0 ? <Link key={index} to="#" className={cnBlockFooter("Link")}> <Note mods={{size:'s' , color:"white"}} className={cnBlockFooter("Note")} text={el}/> </Link>
           :
          <Link key={index} to="#" className={cnBlockFooter("Link")} >
           <Note mods={{size:"s", color:"white"}} text={el} className={cnBlockFooter("UnderNote")}  />
          </Link>
          )}
      </div>
    )
}

export default BlockFooter
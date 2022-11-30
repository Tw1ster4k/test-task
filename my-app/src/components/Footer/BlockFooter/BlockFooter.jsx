import React from 'react'
import { cn } from '@bem-react/classname'
import "./BlockFooter.css"
import Title from '../../pages/Title/Title'
import Note from '../../pages/Note/Note'
import { Link } from 'react-router-dom'

const BlockFooter = ({body}) => {
    const cnBlockFooter = cn("BlockFooter")
  return (
    <div className={cnBlockFooter()}>
       { body.title ?
           <Link to="#" className={cnBlockFooter("Link")} ><Title mods={{size: "sm", color:"white"}} className={cnBlockFooter("Title")} text={body.title} /></Link> :
           <Link to="#" className={cnBlockFooter("Link")} >
            <Note mods={{size:"s", color:"white"}} text={body.titleNote} className={cnBlockFooter("UnderNote")} />
            </Link>
        }
        {body.body.map((el, index) =>
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
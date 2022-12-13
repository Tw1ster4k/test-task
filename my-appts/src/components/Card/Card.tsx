import { cn } from "@bem-react/classname"
import Image from "../Image/Image"
import Title from "../Title/Title"
import Note from "../Note/Note"
import Line from "../Line/Line"
import "./Card.css"

interface TypeCard {
    imgurl: string,
    title: string,
    body: string,
    explore: string
}

const Card = ({imgurl, title, body, explore} : TypeCard ) => {
    const cnCard = cn("Card")
  return (
    <div className={cnCard()} >
        <div className={cnCard("Content")}>
        <Image imgurl={imgurl} />
        <Title mods={{size:"s", color:"white"}} className={cnCard("Title")} text={title} />
        <Note mods={{size:'sl', color:"white"}} className={cnCard("Note")} text={body}/>
        <Note mods={{size:'s', color:"white"}} className={cnCard("Under")} text={explore}/>
        <Line mods={{color:"white", size:"ma"}} className={cnCard("Line")} />
        </div>
    </div>
  )
}
export default Card
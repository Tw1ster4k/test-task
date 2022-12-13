import { cn } from "@bem-react/classname"
import Image from "../Image/Image"
import Note from "../Note/Note"
import "./CardImg.css"

interface TypeCardImg{
    imgurl: string,
    imgtitle: string,
    body: string
}

const CardImg = ({imgurl, imgtitle, body} : TypeCardImg ) => {
    const cnCardImg = cn("CardImg")
  return (
    <div className={cnCardImg()}>
        <Image mods={{size: "m"}} imgurl={imgurl} />
        <Image mods={{size:"s"}} className={cnCardImg("Image")} imgurl={imgtitle}/>
        <div className={cnCardImg("Info")}>
        <Note mods={{size:"sm", color:"purple", textAlign:"center"}} text={body} />
        </div>
    </div>
  )
}

export default CardImg
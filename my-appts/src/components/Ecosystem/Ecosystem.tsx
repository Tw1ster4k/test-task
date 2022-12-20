import { cn } from "@bem-react/classname"
import Note from "../Note/Note"
import Title from "../Title/Title"
import Image from "../Image/Image"
import "./Ecosystem.css"
import System from "../pictures/System.png"
import {Button} from "../Button/Button";

const Ecosystem = () => {
    const cnEcosystem = cn("Ecosystem")
  return (
    <div className={cnEcosystem()}>
        <div className={cnEcosystem("Content")}>
        <Title mods={{size:"mm", color:"dbd"}} text={"A connected ecosystem."} />
        <Note mods={{size:'ls'}} className={cnEcosystem("Note")} text={"The Qubit personalization platform is designed with enterprise and high-growth businesses in mind."}/>
        <Note mods={{size:'ls'}} className={cnEcosystem("Under")} text={"Our open ecosystem approach means you can connect any data source and deliver personalization across any channel."}/>
        <Button mods={{size: "sma"}} className={cnEcosystem("Button")} text={"See our integrations"}/>
        <Image imgurl={System} mods={{size:"large"}} className={cnEcosystem("Image")} />
        </div>
    </div>
  )
}

export default Ecosystem
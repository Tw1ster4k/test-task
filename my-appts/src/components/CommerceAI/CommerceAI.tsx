import { cn } from "@bem-react/classname"
import "./CommerceAI.css"
import Title from "../Title/Title"
import Note from "../Note/Note"
import Lypa from "../pictures/Lypa.png"
import Head from "../pictures/Head.png"
import Hill from "../pictures/Hill.png"
import Block from "../Block/Block"


const CommerceAI = () => {
    const cnCommerceAI = cn("CommerceAI")
    return (
      <div className={cnCommerceAI()}>
          <Title mods={{size:"mm", textAlign:'center'}} text={"Qubit CommerceAI."} />
          <Note mods={{size:'ls', textAlign: 'center'}} className={cnCommerceAI("Note")} text={"The new way to drive growth."}/>
          <div className={cnCommerceAI("Items")}>
            {/*  TODO! Дублируется код, имеет смысл выводить через map*/}
            <Block imgurl={Lypa} title={"More insight"} body={"Learn which products drive performance and which don't, through automated insights you can action."}/>
            <Block imgurl={Head} title={"More personal"} body={"Qubit CommerceAI generates a model per shopper to make every customer interaction more relevant."} />
            <Block imgurl={Hill} title={"More effective"} body={"Qubit fuses data, intent, and design tools to enable your team to create more effective customer experiences."} />
          </div>
      </div>
    )
}

export default CommerceAI
import React from 'react'
import { cn } from '@bem-react/classname';
import "./commerceai.css"
import Title from '../pages/Title/Title';
import Note from '../pages/Note/Note';
import Images from '../pages/Images/Images';
import Lypa from "../pictures/Lypa.png"
import Head from "../pictures/Head.png"
import Hill from "../pictures/Hill.png"

const CommerceAll = () => {
    const cnCommerceAll = cn("CommerceAll")
  return (
    <div className={cnCommerceAll()}>
        <Title mods={{size:"mm", textAlign:'center'}} text={"Qubit CommerceAI."} />
        <Note mods={{size:'ls', textAlign: 'center'}} text={"The new way to drive growth."}/>
        <div className={cnCommerceAll("Items")}>
                <div className={cnCommerceAll("Block")}>
                    <Images imgurl={Lypa} mods={{size:'sm', direction:"center"}}/>
                    <Title mods={{size:"sm", textAlign:'center', direction:"underImg"}} text={"More insight"} />
                    <Note mods={{size:'s', textAlign: 'center', direction:"lover"}} text={"Learn which products drive performance and which don't, through automated insights you can action."}/>
                </div>
                <div className={cnCommerceAll("Block")}>
                <Images imgurl={Head} mods={{size:'sm', direction:"center"}}/>
                <Title mods={{size:"sm", textAlign:'center', direction:"underImg"}} text={"More personal"} />
                    <Note mods={{size:'s', textAlign: 'center', direction:"lover"}} text={"Qubit CommerceAI generates a model per shopper to make every customer interaction more relevant."}/>
                    </div>
                    <div className={cnCommerceAll("Block")}>
                    <Images imgurl={Hill} mods={{size:'sm', direction:"center"}}/>
                    <Title mods={{size:"sm", textAlign:'center', direction:"underImg"}} text={"More effective"} />
                    <Note mods={{size:'s', textAlign: 'center', direction:"lover"}} text={"Qubit fuses data, intent, and design tools to enable your team to create more effective customer experiences."}/>
                    </div>
        </div>
    </div>
  )
}

export default CommerceAll
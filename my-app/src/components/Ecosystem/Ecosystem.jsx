import React from 'react'
import { cn } from '@bem-react/classname'
import "./ecosystem.css"
import Title from '../pages/Title/Title'
import Note from '../pages/Note/Note'
import Button from '../pages/Button/Button'
import Images from '../pages/Images/Images'
import System from "../pictures/System.png"

const Ecosystem = () => {
    const cnEcosystem = cn("Ecosystem")
  return (
    <div className={cnEcosystem()}>
        <div className={cnEcosystem("Content")}>
        <Title mods={{size:"mm", color:"dbd"}} text={"A connected ecosystem."} />
        <Note mods={{size:'ls'}} className={cnEcosystem("Note")} text={"The Qubit personalization platform is designed with enterprise and high-growth businesses in mind."}/>
        <Note mods={{size:'ls'}} className={cnEcosystem("Under")} text={"Our open ecosystem approach means you can connect any data source and deliver personalization across any channel."}/>
        <Button mods={{size: "sma"}} className={cnEcosystem("Button")} text={"See our integrations"}/>
        <Images imgurl={System} mods={{size:"large"}} className={cnEcosystem("Image")} />
        </div>
    </div>
  )
}

export default Ecosystem
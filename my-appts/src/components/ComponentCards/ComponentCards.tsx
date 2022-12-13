import React from 'react'
import "./ComponentCards.css"
import { cn } from '@bem-react/classname'
import Woman from "../pictures/Woman.png"
import Clinique from "../pictures/Clinique.png"
import Left from "../pictures/Left.png"
import Right from "../pictures/Right.png"
import Girl from "../pictures/Girl.png"
import Yellow from "../pictures/Yellow.png"
import Island from "../pictures/Island.png"
import MM from "../pictures/MM.png"
import Title from '../Title/Title'
import Image from '../Image/Image'
import CardImg from '../CardImg/CardImg'


const ComponentCards = () => {
    const cnComponentCards = cn("ComponentCards");
    return (
      <div className={cnComponentCards()} >
          <div className={cnComponentCards("Content")}>
          <Title mods={{size:"mm", textAlign:'center'}} text={"Trusted by leading brands."} />
          <div className={cnComponentCards("Items")}>
           <button className={cnComponentCards("Button")}> <Image imgurl={Left} mods={{size:'ls'}} /> </button>
            <CardImg  imgtitle={Clinique} imgurl={Woman} body={"Clinique builds relationships with millions of customers each year."}/>
            <CardImg  imgtitle={Island} imgurl={Girl} body={"River Island transforms the customer experience with personalization."}/>
            <CardImg  imgtitle={MM} imgurl={Yellow} body={"MandM Direct drives increase in revenue with deep learning recs"}/>
            <button className={cnComponentCards("Button")}>  <Image imgurl={Right} mods={{size:'ls'}} /> </button>
          </div>
          </div>
      </div>
    )
}

export default ComponentCards
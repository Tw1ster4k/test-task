import React from 'react'
import { cn } from '@bem-react/classname'
import "./componentcards.css"
import Title from '../pages/Title/Title'
import CardImg from '../pages/CardImg/CardImg'
import Woman from "../pictures/Woman.png"
import Clinique from "../pictures/Clinique.png"
import Left from "../pictures/Left.png"
import Right from "../pictures/Right.png"
import Girl from "../pictures/Girl.png"
import Yellow from "../pictures/Yellow.png"
import Island from "../pictures/Island.png"
import MM from "../pictures/MM.png"
import Images from '../pages/Images/Images'

const ComponentCards = () => {
    const cnComponentCards = cn("ComponentCards");
  return (
    <div className={cnComponentCards()} >
        <div className={cnComponentCards("Content")}>
        <Title mods={{size:"mm", textAlign:'center'}} text={"Trusted by leading brands."} />
        <div className={cnComponentCards("Items")}>
         <button className={cnComponentCards("Button")}> <Images imgurl={Left} mods={{size:'ls'}} /> </button>
          <CardImg  imgtitle={Clinique} imgurl={Woman} body={"Clinique builds relationships with millions of customers each year."}/>
          <CardImg  imgtitle={Island} imgurl={Girl} body={"River Island transforms the customer experience with personalization."}/>
          <CardImg  imgtitle={MM} imgurl={Yellow} body={"MandM Direct drives increase in revenue with deep learning recs"}/>
          <button className={cnComponentCards("Button")}>  <Images imgurl={Right} mods={{size:'ls'}} /> </button>
        </div>
        </div>
    </div>
  )
}

export default ComponentCards
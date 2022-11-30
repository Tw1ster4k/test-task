import React from 'react'
import { cn } from '@bem-react/classname'
import "./footer.css"
import Note from '../pages/Note/Note'
import Earth from "../pictures/Earth.png"
import BlockFooter from './BlockFooter/BlockFooter'
import Images from '../pages/Images/Images'
import WhiteQubit from "../pictures/WhiteQubit.png"

const Footer = () => {
    const cnFooter = cn("Footer")

    const obj1 = {title:"Featured Capabilities" , body: ["A/B testing", 'Abandonment recovery', "Customer insights", "Customer polling and feedback", "Customer segmentation", "Data collection", "Ecommerce merchandising"]}
    const obj2 = {body:["Custom machine learning",'Journey Personalization',"Mobile app personalization","Cross-channel personalization","Social proofing","Website personalization"]}
    const obj3 = {title:"Products", body:['1:1 Product recommendations','1:1 Product badging','1:1 Journey personalization','Personalized content','Product insights'] }
    const obj4 = {title:"Resources", body:['Resources', 'Customers','Qubit Blog.','Glossary']}
    const obj5 = {title:"Company", body:["Why Qubit?",'About us','Careers','Press','Contact']}
    const obj6 = {titleNote:'Working with us', body:["Legal"]}

      const arr = [obj1,obj2,obj3,obj4,obj5,obj6]

  return (
    <div className={cnFooter()}>
        <div className={cnFooter("Content")}>
          {arr.map((el, index) => 
            <BlockFooter key={index} body={el} />
          )}
        </div>
        <Images imgurl={WhiteQubit} className={cnFooter("Title")} />
        <Note mods={{size:'s', color:"white", textAlign:"center" }} className={cnFooter("Note")} text={"© 2021 Qubit. All rights reserved."}/>
        <Images imgurl={Earth} className={cnFooter("Image")} />
    </div>
  )
}

export default Footer
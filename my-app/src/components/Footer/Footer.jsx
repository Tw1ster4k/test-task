import React from 'react'
import { cn } from '@bem-react/classname'
import "./footer.css"
import Title from '../pages/Title/Title'
import Note from '../pages/Note/Note'
import Images from '../pages/Images/Images'
import Earth from "../pictures/Earth.png"

const Footer = () => {
    const cnFooter = cn("Footer")
  return (
    <div className={cnFooter()}>
        <div className={cnFooter("Content")}>
            <div className={cnFooter("Block")}>
            <Title mods={{size: "sm", color:"white"}} text={"Featured Capabilities"} />
            <Note mods={{size:'s', place:"underTitle" , color:"white"}} text={"A/B testing"}/>
            <Note mods={{size:"s", place:"under", color:"white"}} text={"Abandonment recovery"} />
            <Note mods={{size:"s", place:"under", color:"white"}} text={"Customer insights"} />
            <Note mods={{size:"s", place:"under", color:"white"}} text={"Customer polling and feedback"} />
            <Note mods={{size:"s", place:"under", color:"white"}} text={"Customer segmentation"} />
            <Note mods={{size:"s", place:"under", color:"white"}} text={"Data collection"} />
            <Note mods={{size:"s", place:"under", color:"white"}} text={"Ecommerce merchandising"} />
            </div>
            <div className={cnFooter("Block")}>
            <Note mods={{size:'s', place:"underTitle" , color:"white"}} text={"Custom machine learning"}/>
            <Note mods={{size:"s", place:"under", color:"white"}} text={"Journey Personalization"} />
            <Note mods={{size:"s", place:"under", color:"white"}} text={"Mobile app personalization"} />
            <Note mods={{size:"s", place:"under", color:"white"}} text={"Cross-channel personalization"} />
            <Note mods={{size:"s", place:"under", color:"white"}} text={"Social proofing"} />
            <Note mods={{size:"s", place:"under", color:"white"}} text={"Website personalization"} />
            </div>
            <div className={cnFooter("Block")}>
            <Title mods={{size: "sm", color:"white"}} text={"Products"} />
            <Note mods={{size:'s', place:"underTitle" , color:"white"}} text={"1:1 Product recommendations"}/>
            <Note mods={{size:"s", place:"under", color:"white"}} text={"1:1 Product badging"} />
            <Note mods={{size:"s", place:"under", color:"white"}} text={"1:1 Journey personalization"} />
            <Note mods={{size:"s", place:"under", color:"white"}} text={"Personalized content"} />
            <Note mods={{size:"s", place:"under", color:"white"}} text={"Product insights"} />
            </div>
            <div className={cnFooter("Block")}>
            <Title mods={{size: "sm", color:"white"}} text={"Resources"} />
            <Note mods={{size:'s', place:"underTitle" , color:"white"}} text={"Resources"}/>
            <Note mods={{size:"s", place:"under", color:"white"}} text={"Customers"} />
            <Note mods={{size:"s", place:"under", color:"white"}} text={"Qubit Blog."} />
            <Note mods={{size:"s", place:"under", color:"white"}} text={"Glossary"} />
            </div>
            <div className={cnFooter("Block")}>
            <Title mods={{size: "sm", color:"white"}} text={"Company"} />
            <Note mods={{size:'s', place:"underTitle" , color:"white"}} text={"Why Qubit?"}/>
            <Note mods={{size:"s", place:"under", color:"white"}} text={"About us"} />
            <Note mods={{size:"s", place:"under", color:"white"}} text={"Careers"} />
            <Note mods={{size:"s", place:"under", color:"white"}} text={"Press"} />
            <Note mods={{size:"s", place:"under", color:"white"}} text={"Contact"} />
            </div>
            <div className={cnFooter("Block")}>
            <Note mods={{size:'s', color:"white"}} text={"Working with us"}/>
            <Note mods={{size:'s', place:"underTitle" , color:"white"}} text={"Legal"}/>
            </div>
        </div>
        <h2 className={cnFooter("Title")}>Qubit</h2>
        <Note mods={{size:'s', place:"underTitle" , color:"white", textAlign:"center" }} text={"© 2021 Qubit. All rights reserved."}/>
        <Images imgurl={Earth} mods={{direction:'left'}} />
    </div>
  )
}

export default Footer
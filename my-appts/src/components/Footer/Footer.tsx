import { cn } from '@bem-react/classname'
import "./Footer.css"
import BlockFooter from './BlockFooter/BlockFooter'
import Note from '../Note/Note'
import Earth from "../pictures/Earth.png"
import Image from '../Image/Image'
import WhiteQubit from "../pictures/WhiteQubit.png"

const Footer = () => {
    const cnFooter = cn("Footer")

    // TODO! - Нужно кэшировать данные с помощью useMemo
    const obj1 = {title:"Featured Capabilities" , titleNote:'', body: ["A/B testing", 'Abandonment recovery', "Customer insights", "Customer polling and feedback", "Customer segmentation", "Data collection", "Ecommerce merchandising"]}
    const obj2 = { title:'', titleNote:'', body:["Custom machine learning",'Journey Personalization',"Mobile app personalization","Cross-channel personalization","Social proofing","Website personalization"]}
    const obj3 = { titleNote:'', title:"Products", body:['1:1 Product recommendations','1:1 Product badging','1:1 Journey personalization','Personalized content','Product insights'] }
    const obj4 = {titleNote:'', title:"Resources", body:['Resources', 'Customers','Qubit Blog.','Glossary']}
    const obj5 = {titleNote:'', title:"Company", body:["Why Qubit?",'About us','Careers','Press','Contact']}
    const obj6 = {title:'', titleNote:'Working with us', body:["Legal"]}

      const arr = [obj1,obj2,obj3,obj4,obj5,obj6]

  return (
    <div className={cnFooter()}>
        <div className={cnFooter("Content")}>
          {arr.map((el, index) => 
            <BlockFooter key={index} desc={el.body} title={el.title} titleNote={el.titleNote} />
          )}
        </div>
        <Image imgurl={WhiteQubit} className={cnFooter("Title")} />
        <Note mods={{size:'s', color:"white", textAlign:"center" }} className={cnFooter("Note")} text={"© 2021 Qubit. All rights reserved."}/>
        <Image imgurl={Earth} className={cnFooter("Image")} />
    </div>
  )
}

export default Footer
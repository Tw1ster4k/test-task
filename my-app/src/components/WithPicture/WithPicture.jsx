import React from 'react'
import "./withpicture.css"
import { cn } from '@bem-react/classname'
import Title from '../pages/Title/Title'
import Note from '../pages/Note/Note'
import Images from '../pages/Images/Images'
import Button from '../pages/Button/Button'

const WithPicture = () => {
    const cnWithPicture = cn("WithPicture");
  return (
    <div className={cnWithPicture()}>
        <div className={cnWithPicture('Upper')}>
        <Title mods={{size:"mm", textAlign:'center'}} text={"All the power. Easy to use."} />
        <Note mods={{size:'ls', textAlign: 'center'}} text={"By collaborating with real ecommerce teams we've built the next-gen personalization tool. No code. No clunkiness."}/>
        </div>
        <Images imgurl={"https://embed-ssl.wistia.com/deliveries/8925e748b793856657b825287dd29521.jpg"} mods={{size:"b", place:'center' }}/>
        <div className={cnWithPicture("Lower")}>
        <Button mods={{size: "sma"}} text={"Set product"}/>
        <Button mods={{size: "sma", backgroundColor:"white", color:"purple", borderColor:"white"}} text={"Book a demo"}/>
        </div>
    </div>
  )
}

export default WithPicture
import React from 'react'
import { cn } from '@bem-react/classname'
import "./connect.css"
import Note from '../pages/Note/Note'
import Images from '../pages/Images/Images'
import Youtube from "../pictures/Youtube.png"
import Twitter from "../pictures/Twitter.png"
import Linkdin from "../pictures/Linkdin.png"
import Instagram from "../pictures/Instagram.png"
import Facebook from "../pictures/Facebook.png"
import Reward from "../pictures/Reward.png"

const Connect = () => {
    const cnConnect = cn("Connect")
  return (
    <div className={cnConnect()}>
      <Images imgurl={Reward} className={cnConnect("Image")} />
        <div className={cnConnect("Content")}>
            <Note mods={{size:'ls', textAlign: 'center'}} text={"Connect with us"}/>
            <div className={cnConnect("Items")}>
                <Images imgurl={Facebook} />
                <Images imgurl={Twitter} />
                <Images imgurl={Linkdin} />
                <Images imgurl={Instagram} />
                <Images imgurl={Youtube} />
            </div>
        </div>
    </div>
  )
}

export default Connect
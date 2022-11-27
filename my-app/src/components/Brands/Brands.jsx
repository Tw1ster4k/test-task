import React from 'react'
import { cn } from '@bem-react/classname'
import "./brands.css"
import Title from '../pages/Title/Title'
import Images from '../pages/Images/Images'
import Line from '../pages/Line/Line'

const Brands = () => {
    const cnBrands = cn("Brands")

  // Массив с url картонок
  // useEffect - вытащить картинки - сохранить в массив и массив передавать

  return (
    <div className={cnBrands()}>
      <div className={cnBrands("Content")}>
        
        <Title mods={{size: "s", color: "hexGray", textAlign:"center"}} text={"Trusted by world-class brands."} />
        <div className={cnBrands("Images")}>

        {/*  map выводишь из массива картинки*/}
        <Images imgurl={"https://logojinni.com/image/logos/barbour.svg"}  mods={{size:"s"}} />
        <Images imgurl={"https://cdn.worldvectorlogo.com/logos/kate-spade-wordmark.svg"} mods={{size: "s"}} />
        <Images imgurl={"https://1000logos.net/wp-content/uploads/2020/10/LVMH-logo.png"} mods={{size: "s"}} />
        <Images imgurl={"https://freight.cargo.site/t/original/i/609633412b1ce0059ea0fa9094975ecd66daff33f124a3037c8e465dee325c5c/Estee_Lauder_logo.png"} mods={{size: "s"}} />
        <Images imgurl={"https://www.homepagenews.com/wp-content/uploads/2021/12/tjx-logo.jpg"} mods={{size: "s"}} />
        <Images imgurl={"https://logojinni.com/image/logos/river-island.svg"} mods={{size: "s"}} />
        <Images imgurl={"https://www.domotz.com/assets/img/solutions-pages/hospitality/Radisson_Hotels_logo.svg"} mods={{size: "s"}} />
        <Images imgurl={"https://www.lavermonlinge.com/userfiles/images/Clevercare/G-Star_Raw_logo_black.jpg"} mods={{size: "s"}} />
        </div>
        <div className={cnBrands("End")}>
        <Title mods={{size: "s", color: "hexGray", textAlign:"center"}} text={"Meet our customers >"} />
        <Line mods={{size:"m", color:"purple", direction: "center"}} />
        </div>
      </div>
    </div>
  )
}

export default Brands
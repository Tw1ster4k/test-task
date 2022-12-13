import { cn } from '@bem-react/classname'
import "./Brands.css"
import kate from "./Brand/kate.png"
import Barbour from "./Brand/Barbour.png"
import ESTEE from "./Brand/ESTEE.png"
import LVMH from "./Brand/LVMH.png"
import Radisson from "./Brand/Radisson.png"
import River from "./Brand/River.png"
import Star from "./Brand/Star.png"
import TJX from "./Brand/TJX.png"
import Line from '../Line/Line'
import Title from '../Title/Title'
import Image from '../Image/Image'

const Brands = () => {
    const cnBrands = cn("Brands")

    const arr = [Barbour, kate, LVMH, ESTEE, TJX, River, Radisson, Star]



  // Не особо понимаю как мы должны через useEffect импортировать картинки P.S. так и не смог понять и поэтому импортировал каждую по отдельности и кинул в массив

      
  

  return (
    <div className={cnBrands()}>
      <div className={cnBrands("Content")}>
        
        <Title mods={{size: "s", color: "hexGray", textAlign:"center"}} text={"Trusted by world-class brands."} />
        <div className={cnBrands("Images")}>
        {arr.map((el,index) =>
        <Image key={index} imgurl={el}  mods={{size:"s"}} />
        )}
        </div>
        <div className={cnBrands("End")}>
        <Title mods={{size: "s", color: "hexGray", textAlign:"center"}} text={"Meet our customers >"} />
        <Line mods={{size:"m", color:"purple"}} className={cnBrands("Line")} />
        </div>
      </div>
    </div>
  )
}

export default Brands
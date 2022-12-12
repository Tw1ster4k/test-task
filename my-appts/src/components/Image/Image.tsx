
import {cn} from "@bem-react/classname"
import "./Image.css"
interface TypeImage{
    imgurl: string,
    mods?: object,
    className?: string
}

const Image = ({imgurl,mods,className} : TypeImage ) => {
    const cnImage = cn("Image")
  return (
        <img src={imgurl} className={cnImage({...mods}, [className])} alt={'sss'} />
  )
}

export default Image
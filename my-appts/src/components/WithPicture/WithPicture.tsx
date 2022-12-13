import "./WithPicture.css"
import { cn } from "@bem-react/classname"
import Title from "../Title/Title"
import Note from "../Note/Note"
import Image from "../Image/Image"
import Button from "../Button/Button"

const WithPicture = () => {
    const cnWithPicture = cn("WithPicture");
    return (
      <div className={cnWithPicture()}>
          <div className={cnWithPicture('Upper')}>
          <Title mods={{size:"mm", textAlign:'center'}} text={"All the power. Easy to use."} />
          <Note mods={{size:'ls', textAlign: 'center'}} className={cnWithPicture("Note")} text={"By collaborating with real ecommerce teams we've built the next-gen personalization tool. No code. No clunkiness."}/>
          </div>
          <Image imgurl={"https://embed-ssl.wistia.com/deliveries/8925e748b793856657b825287dd29521.jpg"} className={cnWithPicture("Image")} mods={{size:"b"}}/>
          <div className={cnWithPicture("Lower")}>
          <Button mods={{size: "sma"}} text={"Set product"}/>
          <Button mods={{size: "sma", backgroundColor:"white", color:"purple", borderColor:"white"}} text={"Book a demo"}/>
          </div>
      </div>
    )
}

export default WithPicture
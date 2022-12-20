import { cn } from "@bem-react/classname"
import "./Connect.css"
import Youtube from "../pictures/Youtube.png"
import Twitter from "../pictures/Twitter.png"
import Linkdin from "../pictures/Linkdin.png"
import Instagram from "../pictures/Instagram.png"
import Facebook from "../pictures/Facebook.png"
import Reward from "../pictures/Reward.png"
import Note from "../Note/Note"
import Image from "../Image/Image"


const Connect = () => {
    const cnConnect = cn("Connect")
  return (
    <div className={cnConnect()}>
      <Image imgurl={Reward} className={cnConnect("Image")} />
        <div className={cnConnect("Content")}>
            <Note mods={{size:'ls', textAlign: 'center'}} text={"Connect with us"}/>
            <div className={cnConnect("Items")}>
                {/*TODO метод map*/}
                <Image imgurl={Facebook} />
                <Image imgurl={Twitter} />
                <Image imgurl={Linkdin} />
                <Image imgurl={Instagram} />
                <Image imgurl={Youtube} />
            </div>
        </div>
    </div>
  )
}

export default Connect
import { cn } from "@bem-react/classname"
import "./Specialization.css"
import Card from "../Card/Card"
import Title from "../Title/Title"
import Note from "../Note/Note"
import Leaves from "../pictures/Leaves.png"
import Symka from "../pictures/Symka.png"
import Krug from "../pictures/Krug.png"
import Metka from "../pictures/Metka.png"
import Air from "../pictures/Air.png"
import Kosti from "../pictures/Kosti.png"

const Specialization = () => {
    const cnSpecialization = cn("Specialization");
    return (
      <div className={cnSpecialization()}>
              <div className={cnSpecialization("Content")}>
              <Title mods={{size:"mm", textAlign:'center'}} text={"We specialize in your industry."} />
              <Note mods={{size:'ls', textAlign: 'center'}} className={cnSpecialization("Note")} text={"Learn how we are delivering personalization at scale across sectors."}/>
              <div className={cnSpecialization('Items')}>
                  <Card imgurl={Leaves} title={"Beauty and cosmetics"} body={"Discover relevant products. Push samples. Upsell and replenish."} explore={"Explore our solutions for beauty and cosmetics."} />
                  <Card imgurl={Symka} title={"Luxury"} body={"Drive brand experience online. Look after your VIPs."} explore={"Explore our solutions for luxury."} />
                  <Card imgurl={Metka} title={"Travel & tourism"} body={"Be persuasive. Inspire travellers. Drive revenue."} explore={"Explore our solutions for travel and tourism."} />
                  <Card imgurl={Krug} title={"Fashion"} body={"Supercharge merchandising. Reach your best customers."} explore={"Explore our solutions for fashion."} />
                  <Card imgurl={Air} title={"Airlines"} body={"Increase loyalty. Boost ancillary sales. Capture every opportunity."} explore={"Explore our solutions for airlines."} />
                  <Card imgurl={Kosti} title={"Online betting"} body={"Bring events to life. Personalize in real time. Be responsible."} explore={"Explore our solutions for online betting."} />
              </div>
              </div>
      </div>
    )
}

export default Specialization
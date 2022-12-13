import "./Stats.css"
import { cn } from "@bem-react/classname"
import Title from "../Title/Title"
import Line from "../Line/Line"
import Button from "../Button/Button"
import Note from "../Note/Note"
import StatsBlock from "./StatsBlock/StatsBlock"


const Stats = () => {
    const cnStats = cn("Stats")


  return (
    <div className={cnStats()}>
            <div className={cnStats("Content")}>
                <div className={cnStats("Left")}>
                    <Title mods={{size:"mm"}} className={cnStats("Title")} text={"Grow 2.5x faster than your competitors."}/>
                    <Button mods={{size: "sma"}} className={cnStats("Button")} text={"Book a demo"}/>
                    <Title mods={{size: "s", color: "hexGray"}} className={cnStats("Text")} text={"Meet our customers >"}/>
                    <Line mods={{size:"m"}} className={cnStats("LinePurple")} />
                    <Note  mods={{size:"s"}} className={cnStats("Note")} text={"*PwC audited methodology."}/>
                    <Note  mods={{size:"s"}} className={cnStats("Under")} text={"Read the report"}/>
                    <Line mods={{size:"la", color: "black"}} className={cnStats("LineBlack")}/>
                </div>
                <Line mods={{size:'b', color:"gray"}} className={cnStats("LineGray")} />
                 <div className={cnStats("Right")}>
                        <div className={cnStats("Right-Content")}>
                            <StatsBlock title={"140%"} body={"Qubit's top customers"} secondBody={"annual growth rate."} />
                            <StatsBlock title={"$20bn"} body={"Online sales generated"} secondBody={"by our customers in 2020."} />
                            <StatsBlock title={"364"} body={"Ecommerce stores are"} secondBody={"growing faster with Qubit."} />
                        </div>
                        <Line mods={{size:'b', color:"gray"}} className={cnStats("LineRight")} /> 
                        <div className={cnStats("Right-Content")}>
                            <StatsBlock title={"9.5m"} body={"Personalized experiences"} secondBody={"delivered every hour."} />
                            <StatsBlock title={"4.4m"} body={"Shoppers influenced"} secondBody={"by Qubit every day."} />
                            <StatsBlock title={"$1.6bn"} body={"Incremental revenue generated"} secondBody={"by our customers in 2020.*"} />
                        </div>
                </div>
            </div>
    </div>
  )
}

export default Stats
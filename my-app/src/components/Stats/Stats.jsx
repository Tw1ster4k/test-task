import React from 'react'
import "./stats.css"
import { cn } from '@bem-react/classname'
import Title from '../pages/Title/Title'
import Button from '../pages/Button/Button'
import Line from '../pages/Line/Line'
import Note from '../pages/Note/Note'

const Stats = () => {
    const cnStats = cn("Stats")
  return (
    <div className={cnStats()}>
            <div className={cnStats("Content")}>
                <div className={cnStats("Left")}>
                    <Title mods={{size:"mm"}} text={"Grow 2.5x faster than your competitors."}/>
                    <Button mods={{size: "sma"}} text={"Book a demo"}/>
                    <Title mods={{size: "s", color: "hexGray", direction:"right"}} text={"Meet our customers >"}/>
                    <Line mods={{size:"m", direction:'under'}} />
                    <Note  mods={{size:"s", direction:"under"}} text={"*PwC audited methodology."}/>
                    <Note  mods={{size:"s", direction:"lover"}} text={"Read the report"}/>
                    <Line mods={{size:"la", color: "black", direction:"left"}}/>
                </div>
                <Line mods={{size:'b', color:"gray"}} />
                 <div className={cnStats("Right")}>
                        <div className={cnStats("Right-Content")}>
                            <div className={cnStats("Block")}>
                            <Title mods={{size:"mm"}} text={"140%"}/>
                            <Note  mods={{size:"s", direction:"lover"}} text={"Qubit's top customers"}/>
                            <Note  mods={{size:"s"}} text={"annual growth rate."}/>
                            </div>
                            <div className={cnStats("Block")}>
                            <Title mods={{size:"mm"}} text={"$20bn"}/>
                            <Note  mods={{size:"s", direction:"lover"}} text={"Online sales generated"}/>
                            <Note  mods={{size:"s"}} text={"by our customers in 2020."}/>
                            </div>
                            <div className={cnStats("Block")}>
                            <Title mods={{size:"mm"}} text={"364"}/>
                            <Note  mods={{size:"s", direction:"lover"}} text={"Ecommerce stores are"}/>
                            <Note  mods={{size:"s"}} text={"growing faster with Qubit."}/>
                            </div>
                        </div>
                    <Line mods={{size:'b', color:"gray"}} /> 
                    <div className={cnStats("Right-Content")}>
                    <div className={cnStats("Block")}>
                            <Title mods={{size:"mm"}} text={"9.5m"}/>
                            <Note  mods={{size:"s", direction:"lover"}} text={"Personalized experiences"}/>
                            <Note  mods={{size:"s"}} text={"delivered every hour."}/>
                            </div>
                            <div className={cnStats("Block")}>
                            <Title mods={{size:"mm"}} text={"4.4m"}/>
                            <Note  mods={{size:"s", direction:"lover"}} text={"Shoppers influenced"}/>
                            <Note  mods={{size:"s"}} text={"by Qubit every day."}/>
                            </div>
                            <div className={cnStats("Block")}>
                            <Title mods={{size:"mm"}} text={"$1.6bn"}/>
                            <Note  mods={{size:"s", direction:"lover"}} text={"Incremental revenue generated"}/>
                            <Note  mods={{size:"s"}} text={"by our customers in 2020.*"}/>
                            </div>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default Stats
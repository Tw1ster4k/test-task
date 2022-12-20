import {cn} from "@bem-react/classname"
import Input from '../Input/Input'
import "./Searcher.css"
import {Button} from "../Button/Button";

const Searcher = () => {
    const cnSearcher = cn("Searcher")
  return (
    <div className={cnSearcher()}>
    <Input mods={{size:"m"}} text={"Enter your email"}/>
    <Button mods={{size:'sma', border: true}}  className={cnSearcher("Button")} text={"Book a demo"} />
    </div>
  )
}

export default Searcher
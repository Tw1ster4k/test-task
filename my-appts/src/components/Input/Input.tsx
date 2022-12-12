import {cn} from "@bem-react/classname"
import "./Input.css"

interface TypeInput{
    mods: object,
    text?: string,
}


const Input = ({mods , text} : TypeInput  ) => {
    const cnInput = cn("Input");
  return (
    <input className={cnInput({...mods})} placeholder={text} />
  )
}


export default Input
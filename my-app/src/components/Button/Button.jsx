import React, {useState} from 'react'
import { cn } from '@bem-react/classname'
import "./Button.css"

// Просто передаем сверху объект с нужным набором модификаторов
const Button = ({callBack, text, mods,setHover}) => {
    const cnButton = cn('Button')
        


    return (
        // spread оператором передаем полученный объект в модификатор yandex библиотекиы
        <button className={cnButton({...mods})} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} onClick={callBack}>{text}</button>
    )
}

export default Button
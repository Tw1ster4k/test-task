import React from 'react'
import { cn } from '@bem-react/classname'
import "./Button.css"

// Просто передаем сверху объект с нужным набором модификаторов
const Button = ({callBack, text, mods}) => {
    const cnButton = cn('Button')

    return (
        // spread оператором передаем полученный объект в модификатор yandex библиотекиы
        <button className={cnButton({...mods})} onClick={callBack}>{text}</button>
    )
}

export default Button
import React, {useState} from 'react'
import { cn } from '@bem-react/classname'
import "./Button2.css"

// Просто передаем сверху объект с нужным набором модификаторов
const Button = ({callBack, text, mods}) => {
    const cnButton = cn('Button')

    const [hover,setHover] = useState(false);
    const buttonMods = hover ? {...mods.base, ...mods.hover} : {...mods.base};

    return (
        // spread оператором передаем полученный объект в модификатор yandex библиотекиы
        <button
            className={cnButton(buttonMods)}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            onClick={callBack}
        >
            {text}
        </button>
    )
}

export default Button
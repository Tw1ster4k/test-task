import React from 'react'
import { cn } from '@bem-react/classname'
import "./Button.css"

const Button = ({callBack, text}) => {
    const cnButton = cn('Button')

    return (
        <button className={cnButton()} onClick={callBack}>{text}</button>
    )
}

export default Button
import React from 'react'
import { cn } from '@bem-react/classname'
import "./Button.css"

const Button = ({callBack, text, active}) => {
    const cnButton = cn('Button')

    return (
        <button className={active === true ? cnButton({size: "s", backroundColor:"blue" }) : cnButton(/* {size: "m", backroundColor: "red"} */)} onClick={callBack}>{text}</button>
    )
}

export default Button
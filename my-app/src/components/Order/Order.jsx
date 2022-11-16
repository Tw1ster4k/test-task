import React from 'react'
import { cn } from '@bem-react/classname'
import "./order.css"
import Title from '../pages/Title/Title'
import Input from '../pages/Input/Input'
import Button from '../pages/Button/Button'

const Order = () => {
    const cnOrder = cn("Order")
  return (
    <div className={cnOrder()}>
      <div className={cnOrder("Content")}>
        <Title mods={{size:"mm", color:"white", textAlign:'center'}} text={"Book a demo today."} />
        <div className={cnOrder("Items")}>
          <Input mods={{size:"m"}} text={"Enter your email"}/>
          <Button mods={{size:'sma', border: true}} text={"Book a demo"} />
        </div>
      </div>

    </div>
  )
}

export default Order
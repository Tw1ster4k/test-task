import React from 'react'
import { cn } from '@bem-react/classname'
import "./order.css"
import Title from '../pages/Title/Title'
import Searcher from '../pages/Searcher/Searcher'

const Order = () => {
    const cnOrder = cn("Order")
  return (
    <div className={cnOrder()}>
      <div className={cnOrder("Content")}>
        <Title mods={{size:"mm", color:"white", textAlign:'center'}} text={"Book a demo today."} />
        <div className={cnOrder("Items")}>
            <Searcher />
        </div>
      </div>

    </div>
  )
}

export default Order
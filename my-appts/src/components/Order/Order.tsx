import { cn } from '@bem-react/classname'
import Title from '../Title/Title'
import Searcher from '../Searcher/Searcher'
import "./Order.css"

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
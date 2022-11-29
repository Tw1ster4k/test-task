import React from 'react'
import "./Navbar.css"
import { cn } from '@bem-react/classname'
import Images from '../pages/Images/Images'
import Qubit from "../pictures/Qubit.png"
import Button from '../pages/Button/Button'
import { Link } from 'react-router-dom'


const Navbar = () => {
    const cnNavbar = cn("Navbar")
    
    const arr = ["Why Qubit?","Products", "Solution", "Customers", "Case studies" , "Resources", "More"]

  return (
      // Меняем
    <header className={cnNavbar()}>
        <nav className={cnNavbar("Nav")}>
        <Link to="#"><Images imgurl={Qubit} className={cnNavbar("Image")} /> </Link>
        
        <ul className={cnNavbar("Ul")}>
              {arr.map((el, index) => 
                <Link to="#" key={index} className={cnNavbar("Link")} ><li className={cnNavbar("Li")}>{el}</li> </Link>
                )}
                </ul>
        
        <Button className={cnNavbar('Button')} mods={{size:'m'}} text={"Book a demo"} />
        {/*Link*/}
        <Link to="#" className={cnNavbar("Link")} ><li className={cnNavbar("Li")}>Log in</li> </Link>
        </nav>
    </header>
  )
}

export default Navbar
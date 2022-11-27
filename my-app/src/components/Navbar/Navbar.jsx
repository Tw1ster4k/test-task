import React from 'react'
import "./Navbar.css"
import { cn } from '@bem-react/classname'
import Button from '../pages/Button/Button'


const Navbar = () => {
    const cnNavbar = cn("Navbar")
  return (
      // Меняем
    <footer className={cnNavbar()}>
        {/* Вместо <p></p> можно поставить <Link /> из React Router Dom */}
        <h2 className={cnNavbar("Title")}>Qubit.</h2>
        {/*// Обернуть в nav ul li Link*/}
        <p className={cnNavbar("Navigate")}>Why Qubit?</p>
        <p className={cnNavbar("Navigate")}>Products</p>
        <p className={cnNavbar("Navigate")}>Solution</p>
        <p className={cnNavbar("Navigate")}>Customers</p>
        <p className={cnNavbar("Navigate")}>Case studies</p>
        <p className={cnNavbar("Navigate")}>Resources</p>
        <p className={cnNavbar("Navigate")}>More</p>
        {/* Обернуть в родительский элемент */}
        <Button className={cnNavbar('Button')} mods={{size:'m'}} text={"Book a demo"} />
        {/*Link*/}
        <p className={cnNavbar("Navigate")}>Log in</p>
    </footer>
  )
}

export default Navbar
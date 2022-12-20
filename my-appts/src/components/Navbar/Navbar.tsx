import "./Navbar.css"
import {cn} from "@bem-react/classname"
import { Link } from 'react-router-dom'
import Qubit from "../pictures/Qubit.png"
import Image from "../Image/Image"
import {useMemo} from "react";
import {Button, cnButton} from "../Button/Button";

// TODO! Выносим cn за тело функции
const cnNavbar = cn("Navbar")

const Navbar = () => {

    // TODO! Кэшируем статичные данные
    const arr = useMemo(() => ["Why Qubit?","Products", "Solution", "Customers", "Case studies" , "Resources", "More"], []);

  return (
      // Меняем
    <header className={cnNavbar()}>
        <nav className={cnNavbar("Nav")}>
            <Link to="#"><Image imgurl={Qubit} className={cnNavbar("Image")} /> </Link>

            <ul className={cnNavbar("Ul")}>
              {arr.map((el, index) =>
                <Link to="#" key={index} className={cnNavbar("Link")} ><li className={cnNavbar("Li")}>{el}</li> </Link>
                )}
            </ul>

            {/*TODO! пример импортированного класса*/}
            {/*TODO! То, что учили раньше по props mods, можно за счет импортированного класса cnButton, примиксовывать модификаторы*/}
            {/*https://github.com/bem/bem-react/tree/master/packages/classname - примеры использования библиотеки*/}
            {/**/}
            <Button className={cnNavbar(cnButton({size: 'm'}))} mods={{}} text={"Book a demo"} />
            {/*Link*/}
            <Link to="#" className={cnNavbar("Link")} ><li className={cnNavbar("Li")}>Log in</li> </Link>
        </nav>
    </header>
  )
}

export default Navbar
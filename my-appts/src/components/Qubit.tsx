import {cn} from "@bem-react/classname"
import "./Qubit.css"
import Navbar from "./Navbar/Navbar"
import Search from "./Search/Search"
import Brands from "./Brands/Brands"
import Stats from "./Stats/Stats"
import CommerceAI from "./CommerceAI/CommerceAI"
import WithPicture from "./WithPicture/WithPicture"
import Opportunities from "./Opportunities/Opportunities"
import ComponentCards from "./ComponentCards/ComponentCards"
import Specialization from "./Specialization/Specialization"
import Ecosystem from "./Ecosystem/Ecosystem"
import Order from "./Order/Order"
import Connect from "./Connect/Connect"
import Footer from "./Footer/Footer"

const Qubit = () => {
    const cnQubit = cn("Qubit")
  return (
    <div className={cnQubit()}>
    <Navbar />
    <Search />
    <Brands />
    <Stats />
    <CommerceAI />
    <WithPicture />
    <Opportunities />
    <ComponentCards />
    <Specialization />
    <Ecosystem />
    <Order />
    <Connect />
    <Footer />
    </div>
  )
}

export default Qubit
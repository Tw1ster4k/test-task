import React from 'react'
import { cn } from '@bem-react/classname'

import Images from './pages/Images/Images'
import Reward from "./pictures/Reward.png"

// импорт компонентов
import Navbar from './Navbar/Navbar'
import Search from './Search/Search'
import Brands from './Brands/Brands'
import Stats from './Stats/Stats'
import CommerceAll from './CommerceAll/CommerceAI'
import WithPicture from './WithPicture/WithPicture'
import Opportunities from './Opportunities/Opportunities'
import ComponentCards from './ComponentCards/ComponentCards'
import Specialization from './Specialization/Specialization'
import Ecosystem from './Ecosystem/Ecosystem'
import Order from './Order/Order'
import Connect from './Connect/Connect'
import Footer from './Footer/Footer'


const Qubit = () => {
    const cnQubit = cn("Qubit")
  return (
    <div className={cnQubit()}>
    <Navbar />
    <Search />
    <Brands />
    <Stats />
    <CommerceAll />
    <WithPicture />
    <Opportunities />
    <ComponentCards />
    <Specialization />
    <Ecosystem />
    <Order />
    {/*  Переместить */}
    <Images imgurl={Reward} mods={{side:'center'}} />
    <Connect />
    <Footer />
    </div>
  )
}

export default Qubit
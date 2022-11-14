import React from 'react'
import { cn } from '@bem-react/classname'

// импорт компонентов
import Navbar from './Navbar/Navbar'
import Search from './Search/Search'
import Brands from './Brands/Brands'
import Stats from './Stats/Stats'
import CommerceAll from './CommerceAll/CommerceAI'
import WithPicture from './WithPicture/WithPicture'
import Opportunities from './Opportunities/Opportunities'
import ComponentCards from './ComponentCards/ComponentCards'

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
    </div>
  )
}

export default Qubit
import React from 'react'
import { cn } from '@bem-react/classname'

// импорт компонентов
import Navbar from './Navbar/Navbar'
import Search from './Search/Search'
import Brands from './Brands/Brands'
import Stats from './Stats/Stats'

const Qubit = () => {
    const cnQubit = cn("Qubit")
  return (
    <div className={cnQubit()}>
    <Navbar />
    <Search />
    <Brands />
    <Stats />
    </div>
  )
}

export default Qubit
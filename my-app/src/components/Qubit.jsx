import React from 'react'
import { cn } from '@bem-react/classname'
import Navbar from './Navbar/Navbar'
import Search from './Search/Search'

const Qubit = () => {
    const cnQubit = cn("Qubit")
  return (
    <div className={cnQubit()}>
    <Navbar />
    <Search />
    </div>
  )
}

export default Qubit
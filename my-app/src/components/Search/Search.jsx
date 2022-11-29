import React from 'react'
import "./search.css"
import { cn } from '@bem-react/classname'
import Note from '../pages/Note/Note'
import Searcher from '../pages/Searcher/Searcher'

const Search = () => {
    const cnSearch = cn("Search")

  return (
    <div className={cnSearch()}>
        <div className={cnSearch("Content")}>
            <Note mods={{size:"s"}} className={cnSearch("Note")} text={"Driving growth with personalization."} />
            <h1 className={cnSearch("Title", {color:"Black"})}>Make ecommerce</h1>
            <h1 className={cnSearch("Title", {color:"Purple"})}>More personal.</h1>

            <p className={cnSearch("Text")}>
            Hundreds of brands use <b>Qubit CommerceAI</b>  to power the next generation of product recommendations, badging and insights to build exceptional customer experiences.
            </p>
            <Searcher />
        </div>
    </div>
  )
}

export default Search
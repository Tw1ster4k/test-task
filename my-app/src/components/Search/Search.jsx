import React from 'react'
import "./search.css"
import { cn } from '@bem-react/classname'
import Note from '../Note/Note'
import Title from '../Title/Title'
import Input from '../Input/Input'
import Button from '../Button/Button'

const Search = () => {
    const cnSearch = cn("Search")

  return (
    <div className={cnSearch()}>
        <div className={cnSearch("Content")}>
                <Note mods={{size:"s"}} text={"Driving growth with personalization."} />
                <Title mods={{size:"b"}} text={"Make ecommerce"} />
                <Title mods={{size:"b", color: "purple"}} text={"More personal."} />
                <p className={cnSearch("Text")}>
                Hundreds of brands use Qubit CommerceAI  to power the next generation of product recommendations, badging and insights to build exceptional customer experiences.
                </p>
                <Input mods={{size:"m"}} text={"Enter your email"}/>
                <Button mods={{size:'sma'}} text={"Book a demo"} />
        </div>
    </div>
  )
}

export default Search
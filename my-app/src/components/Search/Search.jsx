import React from 'react'
import "./search.css"
import { cn } from '@bem-react/classname'
import Note from '../pages/Note/Note'
import Title from '../pages/Title/Title'
import Input from '../pages/Input/Input'
import Button from '../pages/Button/Button'

const Search = () => {
    const cnSearch = cn("Search")

  return (
    <div className={cnSearch()}>
        <div className={cnSearch("Content")}>
                <Note mods={{size:"s"}} text={"Driving growth with personalization."} />
                <Title mods={{size:"b", color:"black"}} text={"Make ecommerce"} />
                <Title mods={{size:"b", color: "purple"}} text={"More personal."} />
                <p className={cnSearch("Text")}>
                Hundreds of brands use Qubit CommerceAI  to power the next generation of product recommendations, badging and insights to build exceptional customer experiences.
                </p>
                <Input mods={{size:"m"}} text={"Enter your email"}/>
                <Button mods={{size:'sma', border: true}} text={"Book a demo"} />
        </div>
    </div>
  )
}

export default Search
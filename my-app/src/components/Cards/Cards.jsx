import React from 'react'
import {cn} from "@bem-react/classname";
import "./Cards.css"

const Cards = ({data}) => {
    const cnCards = cn("Cards")

  return (
    <div className={cnCards()}>
         
            {Array.isArray(data) && data.length !== 0 ? data.map((el, index) =>
                    <div className={cnCards('Item')} key={index}>
                        <div className={cnCards('Text')}>Name: {el.name.first} {el.name.last}</div>
                        <div className={cnCards('Text')}>Age: {el.dob.age}</div>
                        <div className={cnCards('Text')}>Number: {el.phone}</div>
                        <div className={cnCards('Text')}>email: {el.email}</div>
                        <img className={cnCards('Image')} src={el.picture.large} alt={'img'}/>
                   </div>
                ) : <div>Loading...</div>
            }
    </div>
  )
}

export default Cards
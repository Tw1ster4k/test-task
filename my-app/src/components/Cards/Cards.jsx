import React from 'react'
import {cn} from "@bem-react/classname";
import "./cards.css"

const Cards = ({data}) => {
    const card = cn("Card")

   
  return (
    <div className='cards'>
            {Array.isArray(data) ? data.map((el, index) =>
            <div className={card()} key={index}>
                <div className={card("Contents" ,{ content: "name"})}>Name: {el.name.first} {el.name.last}</div>
                <div className={card("Contents" ,{ content: "age"})}>Age: {el.dob.age}</div>
                <div className={card("Contents" ,{ content: "number"})}>Number: {el.phone}</div>
                <div className={card("Contents" ,{ content: "email"})} >email: {el.email}</div>
                <img className={card("Contents" ,{ content: "img"})} src={el.picture.large} />
           </div> 
                )
                :
            <div>Loading...</div> 
            }
    </div>
  )
}

export default Cards
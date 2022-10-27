/* eslint-disable jsx-a11y/alt-text */
import {cn} from "@bem-react/classname";
import React from 'react'
import './modal.css'
import './cards.css'

const Modal = ({active, setActive, children}) => {

  const card = cn("card")
  const card_contents = cn("card__contents")
 

  const cards = children !== {} ? children.map((el, index) => 
    <div className={card()} key={index}>
         <div className={card_contents({ content: "name"})} key={el.name.title}>Name: {el.name.first} {el.name.last}</div>
         <div className={card_contents({content: "age"})} key={el.dob.age.toString()}>Age: {el.dob.age}</div>
         <div className={card_contents({content: "number"})} key={el.phone}>Number: {el.phone}</div>
         <div className={card_contents({content: "email"})} key={el.email}>email: {el.email}</div>
         <img className={card_contents({content: "img"})} key={el.id.value} src={el.picture.large} />
    </div> 
  ) : <div />;



     
  return (
      <div className={active ? "modal modal__active" : 'modal'} >
        <div className={active ? "modal__content modal__content__active" : 'modal__content'}>
        <button className='close' onClick={() => setActive(false)}>Закрыть</button>
        <div className="cards">
              {cards}
        </div>
        </div>
    </div>
  )
}

export default Modal
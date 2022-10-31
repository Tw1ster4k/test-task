/* eslint-disable jsx-a11y/alt-text */
import {cn} from "@bem-react/classname";
import React from 'react'
import './modal.css'
import './cards.css'

// children - зарезервированное слово, которое используется для описания вложенных элементов
const Modal = ({active, setActive, data, children}) => {

    // Убрать
  const card = cn("card")
    // Убрать
  const card_contents = cn("card__contents")

    // Создаем блок по БЭМ (с большой буквы)
    const cnModal = cn('Modal');
 

    // Убрать, оставить только логику модального окна
    // data !== {} - зачем? когда прилетает массив. Проверку можно сделать на длину массива data.length
  const cards = data !== {} ? data.map((el, index) =>
    <div className={card()} key={index}>
         {/*key нужен только на родительский div, 2 убрал, остальные также убери*/}
         <div className={card_contents({ content: "name"})}>Name: {el.name.first} {el.name.last}</div>
         <div className={card_contents({content: "age"})}>Age: {el.dob.age}</div>
         <div className={card_contents({content: "number"})} key={el.phone}>Number: {el.phone}</div>
         <div className={card_contents({content: "email"})} key={el.email}>email: {el.email}</div>
         <img className={card_contents({content: "img"})} key={el.id.value} src={el.picture.large} />
    </div> 
  ) : <div>Данных нет</div>;



     
  return (
      // Правильно используем библиотеку (Если active = true, тогда будет так - Modal Modal_active, если active = false, тогда будет так Modal (active не применится))
      <div className={cnModal({active: active})} >
        <div className={cnModal('Content', {active: active})}>
        {/* Кнопку вынести в отдельный компонент, например Button */}
        <button className='close' onClick={() => setActive(false)}>Закрыть</button>
        <div className="cards">
              {/*Передать сверху через props*/}
              {cards}
            {children}
        </div>
        </div>
    </div>
  )
}

export default Modal
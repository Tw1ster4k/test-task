/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import './modal.css'
import './cards.css'

const Modal = ({active, setActive, children}) => {
  
  const card = children !== {} ? children.map((el, index) => 
    <div className='cards' key={index}>
      <div key={el.id.name.toString()}>
         <div className='name' key={el.name.title}>Name: {el.name.first} {el.name.last}</div>
         <div className='name' key={el.dob.age.toString()}>Age: {el.dob.age}</div>
         <div className='name' key={el.phone}>Number: {el.phone}</div>
         <div className='name' key={el.email}>email: {el.email}</div>
         <img className='imgHumans' key={el.id.value} src={el.picture.large} />
      </div>
    </div> 
  ) : <div />;



     
  return (
      <div className={active ? "modal active" : 'modal'} >
        <div className={active ? "modal__content active" : 'modal__content'}>
        <button className='close-btn' onClick={() => setActive(false)}>Закрыть</button>
              {card}
        </div>
    </div>
  )
}

export default Modal
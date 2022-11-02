import {cn} from "@bem-react/classname";
import React from 'react'
import './Modal.css'

const Modal = ({active, children}) => {

    const cnModal = cn('Modal');

  return (
      <div className={cnModal({active: active})} >
        <div className={cnModal('Content', {active: active})}>
            {children}
        </div>
    </div>
  )
}

export default Modal
import React from 'react'
import { useState } from 'react'
import Modal from '../Modal/Modal'

import './main.css'

const Main = () => {

        const [modalActive, setModalActive] = useState(false)
        const [users, setUsers] = useState([])


    const getUsers = () => {
        setModalActive(true)
            fetch('https://randomuser.me/api/?results=10').then(async (res) => {
                const result = await res.json()
               setUsers(result.results)
            })
}
return (
    <div className='kingDiv'> 
        <button className='open-btn' onClick={ getUsers }>Открыть</button>
            <Modal active={modalActive} setActive={setModalActive} children={ users } />
    </div>
)
}

export default Main
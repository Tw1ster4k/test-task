import React from 'react'
import { useState } from 'react'
import { cn } from "@bem-react/classname";
import Modal from '../Modal/Modal'

import './main.css'

const Main = () => {
    const main = cn("Main")
    const open = cn("open")

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
    <div className={main()}>
        {/* Кнопку вынести в отдельный компонент, например Button */}
        <button className={open()} onClick={ getUsers }>Открыть</button>
            <Modal active={modalActive} setActive={setModalActive} data={ users }>
                <div>Передаем сверху в модалку любую структуру</div>
            </Modal>
    </div>
)
}

export default Main
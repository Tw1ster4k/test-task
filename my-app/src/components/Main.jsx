import React from 'react'
import { useState } from 'react'
import { cn } from "@bem-react/classname";
import Modal from './Modal/Modal'
// Удалить из проекта
import OpenBtn from './OpenBtn/OpenBtn';
import CloseBtn from './CloseBtn/CloseBtn';
import Cards from './Cards/Cards';
import Button from "./Button/Button";

const Main = () => {

    // Когда используешь библиотеку, пиши cn...(имя блока с большой буквы)
    const cnMain = cn("Main")
        const [modalActive, setModalActive] = useState(false)
        const [data,setData] = useState({})
        
        const getData = () => {
            setModalActive(true)
            fetch('https://randomuser.me/api/?results=10').then(async (res) => {
                const result = await res.json()
                setData(result.results)
            })
    }

    return (
        <div className={cnMain()}>
            {/*Постарайся разобраться, как я сделал универсальную кнопку и как происходит передача данных внутрь*/}
            <Button callBack={() => getData()} text={'Открыть'}/>
            <Modal active={modalActive}>
                <Button callBack={() => setModalActive(false)} text={'Закрыть'}/>
                <Cards data={data} />
            </Modal>
        </div>
    )
}

export default Main
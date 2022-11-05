import React from 'react'
import { useState } from 'react'
import { cn } from "@bem-react/classname";
import Modal from './Modal/Modal'
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
            {/*Используем кнопку "как есть"*/}
            <Button callBack={() => getData()} text={'Открыть'} mods={{}}/>
            <Modal active={modalActive}>
                {/*Передаем набор модификаторов*/}
                <Button callBack={() => setModalActive(false)} text={'Закрыть'} mods={{size: "s", backroundColor: "blue"}}/>
                <Cards data={data} />
            </Modal>
        </div>
    )
}

export default Main
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
            {/*У нас есть 2 параметра callBack и text. Первый отвечает за функции которые мы передаём, а второй за название кнопки*/}
            {/* не особо понимаю как можно наложить на 1 кнопку разные стили, но скорее всего нам нужно будет передать ещё и modalActive*/}
            {/* если true то classname={cnButton("Close")} или cnButton("false") иначе classname={cnButton("Open")} или cnButton("true") */}
            {/* или classname={cnButton({active: modalActive})} */}
            {/* тем самым наши стили будут применяться к определённому классу */}
            {/* PS: Не договорил что если мы хотим создать 2 модификатора, которые отвечают за размер и за цвет, 
            то наверное нам придётся использовать 1 способо пример: classname={modalActive === true ? cnButton({size: "s", backround-color: "blue"}) : cnButton({size: "m", backround-color: "red"})}
            И я ещё заметил что когда модальное окно активно то кнопка закрыть всегда будет активна и мы можем передать в поле active только положительное значение 
            */}


            <Button callBack={() => getData()} text={'Открыть'} />
            <Modal active={modalActive}>
                <Button callBack={() => setModalActive(false)} text={'Закрыть'} active={true}/>
                <Cards data={data} />
            </Modal>
        </div>
    )
}

export default Main
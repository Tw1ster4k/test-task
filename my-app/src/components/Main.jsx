import React from 'react'
import { useState } from 'react'
import { cn } from "@bem-react/classname";
import Modal from './Modal/Modal'
import OpenBtn from './OpenBtn/OpenBtn';
import CloseBtn from './CloseBtn/CloseBtn';
import Cards from './Cards/Cards';


const Main = () => {
    const main = cn("Main")
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
    <div className={main()}>
        <OpenBtn getData={getData}/>
            <Modal active={modalActive}>
                <CloseBtn setActive={setModalActive}/>
                <Cards data={data} />
            </Modal>
    </div>
)
}

export default Main
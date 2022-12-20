import { cn } from '@bem-react/classname'
import "./Button.css"
import {IClassNameProps} from "@bem-react/core";
import React from "react";

// TODO! Экспортируем имя класса для возможности вызова в другом компоненте
export const cnButton = cn("Button")

// TODO! Экспортируем интерфейс для возможности вызова в другом компоненте
// TODO Название интерфейса с I, дальше название компонента и Props (IНазваниеКомпонентаProps)
export interface IButtonProps extends IClassNameProps {
    className?: string,
    mods?: object,
    text: string
}

// TODO! Можно не писать export default, а сразу делать экспорт компонента
export const Button: React.FC<IButtonProps> = ({className, mods, text}) => {
  return (
       <button className={cnButton({...mods}, [className])}>
           {text}
       </button>
  );
}
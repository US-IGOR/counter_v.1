import React from "react";
import s from "./ButtonControl.module.css"


type ButtonComponPropsType = {
   nameButton?: string
   cb?: ()=>void
    disabled?:boolean
}


export const ButtonCompon = (props: ButtonComponPropsType) => {
    return    <button className={s.button} onClick={props.cb} disabled={props.disabled}>{props.nameButton}</button>

}
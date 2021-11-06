import React from "react";


type ButtonComponPropsType = {
   nameButton?: string
   cb?: ()=>void
    disabled?:boolean
}


export const ButtonCompon = (props: ButtonComponPropsType) => {
    return    <button onClick={props.cb} disabled={props.disabled}>{props.nameButton}</button>

}
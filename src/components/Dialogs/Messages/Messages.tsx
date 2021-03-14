import React from "react";
import css from './Messages.module.css';

type messagesType ={
    message: Array<string>
}

export function Messages(props: messagesType) {
    return (
        <div className={css.messages}>
            {props.message.map( el =>  <div> {el} </div> )}
        </div>
    )
}
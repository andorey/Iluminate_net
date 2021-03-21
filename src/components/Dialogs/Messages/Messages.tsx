import React from "react";
import css from './Messages.module.css';

type MessagesType ={
    message: string
}

export function Messages(props: MessagesType) {
    return (
        <div className={css.messages}>
            {props.message}
        </div>
    )
}
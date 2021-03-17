import React from "react";
import css from './Messages.module.css';

type messagesType ={
    message: string
}

export function Messages(props: messagesType) {
    return (
        <div className={css.messages}>
            {props.message}
        </div>
    )
}
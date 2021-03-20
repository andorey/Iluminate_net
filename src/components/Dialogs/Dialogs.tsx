import React from "react";
import css from './Dialogs.module.css';
import {Dialog} from "./Dialog/Dialog";
import {Messages} from "./Messages/Messages";

type DialogsType = {
    id: number
    name: string
}
type MessagesType = {
    id: number
    message: string
}
type DialogsPageType = {
    dialogs: DialogsType[]
    messages: MessagesType[]
}

export function Dialogs(props: DialogsPageType) {

    let dialogsElements = props.dialogs.map( el => <Dialog name={el.name} id={el.id}/> );
    let messagesElements = props.messages.map( el => <Messages message={el.message} /> );


    return (
        <div className={css.dialogs}>
            <div className={css.dialogsItem}>
                {dialogsElements}
            </div>
            <div className={css.messages}>
                {messagesElements}
            </div>
        </div>
    )
}

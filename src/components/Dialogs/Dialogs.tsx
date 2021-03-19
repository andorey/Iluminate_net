import React from "react";
import css from './Dialogs.module.css';
import {Dialog} from "./Dialog/Dialog";
import {Messages} from "./Messages/Messages";

export function Dialogs() {
    const dialogsData = [
        {id: 0, name: 'Mask'},
        {id: 1, name: 'Wozniak'},
        {id: 2, name: 'Jobs'},
        {id: 3, name: 'Gates'},
        {id: 4, name: 'Allen'},
    ]
    const messageData =[
        {id: 0, message: 'what you want?'},
        {id: 1, message: 'Give me you phone!'},
        {id: 2, message: 'Remember about death'},
        {id: 3, message: 'Hey, close the window'},
        {id: 4, message: 'What could I do?'},
    ]

    let dialogsElements = dialogsData.map( el => <Dialog name={el.name} id={el.id}/> );
    let messagesElements = messageData.map( el => <Messages message={el.message} /> );


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

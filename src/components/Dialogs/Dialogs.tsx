import React from "react";
import css from './Dialogs.module.css';
import {Dialog} from "./Dialog/Dialog";
import {Messages} from "./Messages/Messages";


export function Dialogs() {
    const dialogs = [
        {id: 0, name: 'Mask', message: ['hello!', 'how are you?', 'what you want?']},
        {id: 1, name: 'Wozniak', message: ['Give me you phone!', 'What is up?', 'Bye!']},
        {id: 2, name: 'Jobs', message: ['Give me my apple', 'Howdy', 'Remember about death']},
        {id: 3, name: 'Gates', message: ['Hey, close the window', 'I new it', 'Forgot it']},
        {id: 4, name: 'Allen', message: ['What could I do?', 'Follow me', 'I got it']},
    ]

    let dialogsElements = dialogs.map( el => <Dialog name={el.name} id={el.id}/>);
    let messagesElements = dialogs.map( el => <Messages message={el.message} /> )

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

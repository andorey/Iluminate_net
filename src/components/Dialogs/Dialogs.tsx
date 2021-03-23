import React from "react";
import css from './Dialogs.module.css';
import {Dialog} from "./Dialog/Dialog";
import {Messages} from "./Messages/Messages";
import {DialogsPageType} from "../../redux/state";

type DialogsDataType = {
    dialogsData: DialogsPageType
}

export function Dialogs(props: DialogsDataType) {

    let dialogsElements = props.dialogsData.dialogs.map( el => <Dialog name={el.name} id={el.id}/> );
    let messagesElements = props.dialogsData.messages.map( el => <Messages message={el.message} /> );


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

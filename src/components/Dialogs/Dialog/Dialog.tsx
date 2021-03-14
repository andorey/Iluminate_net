import React from "react";
import css from './Dialog.module.css';
import {NavLink} from "react-router-dom";


type dialogsElementType = {
    id: number
    name: string
}

export function Dialog(props: dialogsElementType) {
    return (
        <div className={css.item}>
            <NavLink to={'/dialogs/' + props.id} className={css.link} activeClassName={css.active}>
                {props.name}
            </NavLink>
        </div>
    )
}
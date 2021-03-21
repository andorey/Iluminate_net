import React from "react";
import css from './Dialog.module.css';
import {NavLink} from "react-router-dom";


type DialogsElementType = {
    id: string
    name: string
}

export function Dialog(props: DialogsElementType) {

    let path = '/dialogs/' + props.id;

    return (
        <div className={css.item}>
            <NavLink to={path} className={css.link} activeClassName={css.active}>
                {props.name}
            </NavLink>
        </div>
    )
}
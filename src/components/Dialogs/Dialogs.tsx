import React from "react";
import { NavLink } from "react-router-dom";
import css from './Dialogs.module.css';
import {v1} from 'uuid';

export function Dialogs() {
    return (
        <div className={css.dialogs}>
            <div className={css.dialogsItem}>
                <div className={css.items}>
                    <NavLink to='/dialogs/0' className={css.links} activeClassName={css.active}>Mask</NavLink>
                </div>
                <div className={css.items}>
                    <NavLink to='/dialogs/1' className={css.links} activeClassName={css.active}>Wozniak</NavLink>
                </div>
                <div className={css.items}>
                    <NavLink to='/dialogs/2' className={css.links} activeClassName={css.active}>Jobs</NavLink>
                </div>
                <div className={css.items}>
                    <NavLink to='/dialogs/3' className={css.links} activeClassName={css.active}>Gates</NavLink>
                </div>
                <div className={css.items}>
                    <NavLink to='/dialogs/4' className={css.links} activeClassName={css.active}>Allen</NavLink>
                </div>
            </div>
            <div className={css.messages}>
                <div className={css.message}> hello! </div>
                <div className={css.message}> how are you?  </div>
                <div className={css.message}> what do you want? </div>
            </div>
        </div>
    )
}

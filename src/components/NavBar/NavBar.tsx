import React from "react";
import { NavLink } from "react-router-dom";
import css from './NavBar.module.css';

export function NavBar() {
    return (
        <div className={`${css.nav} ${css.active}`}>
            <div className={`${css.item}`}>
                <NavLink to='/profile' className={css.links} activeClassName={css.active}>Profile</NavLink>
            </div>
            <div className={css.item}>
                <NavLink to='/dialogs' className={css.links} activeClassName={css.active}>Messages</NavLink>
            </div>
            <div className={css.item}>
                <NavLink to='/news' className={css.links} activeClassName={css.active}>News</NavLink>
            </div>
            <div className={css.item}>
                <NavLink to='/music' className={css.links} activeClassName={css.active}>Music</NavLink>
            </div>
            <div className={css.item}>
                <NavLink to='/settings' className={css.links} activeClassName={css.active}>Settings</NavLink>
            </div>
        </div>
    )
}

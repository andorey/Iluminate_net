import React from "react";
import css from './NavBar.module.css';

export function NavBar() {
    return (
        <div className={`${css.nav} ${css.active}`}>
            <div className={`${css.item}`}>
                <a href='' className={css.activeLink}>Profile</a>
            </div>
            <div className={css.item}>
                <a href='' className={css.activeLink}>Messages</a>
            </div>
            <div className={css.item}>
                <a href='' className={css.activeLink}>News</a>
            </div>
            <div className={css.item}>
                <a href='' className={css.activeLink}>Music</a>
            </div>
            <div className={css.item}>
                <a href='' className={css.activeLink}>Settings</a>
            </div>
        </div>
    );
}
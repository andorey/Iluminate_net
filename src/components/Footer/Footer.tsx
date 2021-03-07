import React from "react";
import css from './Footer.module.css';

export function Footer(){
    return (
        <div className={css.footer}>
            <span>{'Rich Best Corporation © '}{new Date().getFullYear()}</span>
        </div>
    )
}
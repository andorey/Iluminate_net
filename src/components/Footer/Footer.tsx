import React from "react";
import css from './Footer.module.css';

export function Footer(){
    return (
        <div className={css.footer}>
            <span>{'© '}</span>
            <span>{new Date().getFullYear()}</span>
        </div>
    )
}
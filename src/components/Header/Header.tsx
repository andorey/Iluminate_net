import React from "react";
import css from './Header.module.css';

export function Header() {
    return (
        <div className={css.header}>
            <img src="https://seeklogo.com/images/M/MASON-logo-6EC4494474-seeklogo.com.png" alt=""/>
            <div>Novus Ordo Seclorum</div>
            <img src="https://github.com/andorey/social_net/blob/master/public/img/ill.png?raw=true" alt=""/>
        </div>
    )
}
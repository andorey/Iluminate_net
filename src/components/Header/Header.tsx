import React from "react";
import css from './Header.module.css';

type ImagesType = {
    images: string[]
}

export function Header(props: ImagesType) {
    return (
        <div className={css.header}>
            <img src={props.images[0]} alt=""/>
            <div>Novus Ordo Seclorum</div>
            <img src={props.images[1]} alt=""/>
        </div>
    )
}
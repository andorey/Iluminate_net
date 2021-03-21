import React from "react";
import css from './Music.module.css';

type MusicType = {
    music: string[]
}
type MusicDataTpe = {
    musicData: MusicType
}

export function Music(props: MusicDataTpe) {
    const myMusic = props.musicData.music.map(el => <img src={el} alt=""/>)

    return (
        <div className={css.music}>{myMusic}</div>
    )
}
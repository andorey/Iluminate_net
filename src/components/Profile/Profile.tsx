import React from "react";
import css from './Profile.module.css';
import {Posts} from "./Posts/Posts";

export function Profile() {
    return (
        <div className={css.profile}>
            <div>
                <img src="https://images.wallpaperscraft.com/image/mountain_lake_nature_81057_2560x1080.jpg"
                    alt=""/>
            </div>
            <div className={css.myPhoto}>
                <div className={css.icon}>
                    <img
                        src="https://clutch.ua/crops/ba1ddb/360x0/1/0/2019/05/17/Ns355MiU9gTtcUX1sI0h2JsX8rDxjwTv.jpeg"
                        alt=""/>
                </div>
                <div className={css.aboutMe}>
                    I am JS & TS Developer. <br/>
                    And I think that React is very cool framework! <br/>
                    If you don't believe me... You're right too
                </div>
            </div>
            <Posts/>
            <Posts/>
            <Posts/>
        </div>
    )
}
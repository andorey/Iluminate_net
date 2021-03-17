import React from "react";
import css from './ProfileInfo.module.css'

export function ProfileInfo() {
    return (
        <div>
            <div className={css.theme}>
                <img src="https://images.wallpaperscraft.com/image/mountain_lake_nature_81057_2560x1080.jpg" alt=""/>
            </div>
            <div className={css.myPhoto}>
                <div className={css.icon}>
                    <img src="https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX29109486.jpg" alt=""/>
                </div>
                <div className={css.aboutMe}>
                    I am JS & TS Developer. <br/>
                    And I think that React is very cool framework! <br/>
                    If you don't believe me... You're right too
                </div>
            </div>
        </div>
    )
}
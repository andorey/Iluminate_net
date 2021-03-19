import React from "react";
import css from './ProfileInfo.module.css'

type aboutMyType = {
    arrayAboutMe: string[]
}

export function ProfileInfo(props: aboutMyType) {
    const informationAboutMe = props.arrayAboutMe.map( el => <div>{el}</div> )

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
                    {informationAboutMe}
                </div>
            </div>
        </div>
    )
}
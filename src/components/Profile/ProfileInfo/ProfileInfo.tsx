import React, {useState} from "react";
import css from './ProfileInfo.module.css'
import {Avatar} from "./Avatar/Avatar";
import {styleImage, styleMyImage} from "../../../redux/state";

type AboutMyType = {
    arrayAboutMe: string[]
    image: string
}

export function ProfileInfo(props: AboutMyType) {

    let [newStyle, setNewStyle] = useState(styleImage())

    const informationAboutMe = props.arrayAboutMe.map(el => <div>{el}</div>)


    return (
        <div>
            <div className={css.theme}>
                <img src="https://images.wallpaperscraft.com/image/mountain_lake_nature_81057_2560x1080.jpg" alt="" />
            </div>
            <div className={css.myPhoto}>
                <Avatar newStyle={newStyle}
                        setNewStyle={setNewStyle}
                        styleMyImage={styleMyImage}
                        styleImage={styleImage} />
                <div className={css.aboutMe}>
                    {informationAboutMe}
                </div>
            </div>
        </div>
    )
}
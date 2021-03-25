import React, {useState} from "react";
import css from './ProfileInfo.module.css'
import {Avatar} from "./Avatar/Avatar";
import {CreateStyleImage, CreateStyleMyImage} from "../../../redux/state";

type AboutMyType = {
    arrayAboutMe: string[]
    image: string
}

export function ProfileInfo(props: AboutMyType) {

    let [newStyle, setNewStyle] = useState(CreateStyleImage())

    const informationAboutMe = props.arrayAboutMe.map(el => <div>{el}</div>)


    return (
        <div>
            <div className={css.theme}>
                <img src="https://images.wallpaperscraft.com/image/mountain_lake_nature_81057_2560x1080.jpg" alt="" />
            </div>
            <div className={css.myPhoto}>
                <Avatar newStyle={newStyle}
                        setNewStyle={setNewStyle}
                        styleMyImage={CreateStyleMyImage}
                        styleImage={CreateStyleImage} />
                <div className={css.aboutMe}>
                    {informationAboutMe}
                </div>
            </div>
        </div>
    )
}
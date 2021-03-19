import React from "react";
import css from './Profile.module.css';
import {Posts} from "./Posts/Posts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";

const aboutMe = [
    'I am JS & TS Developer.',
    'And I think that React is very cool framework!',
    'If you don\'t believe me... You\'re right too'
]

export function Profile() {

    return (
        <div className={css.profile}>
            <ProfileInfo arrayAboutMe={aboutMe}/>
            <Posts/>
        </div>
    )
}
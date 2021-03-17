import React from "react";
import css from './Profile.module.css';
import {Posts} from "./Posts/Posts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";

export function Profile() {
    return (
        <div className={css.profile}>
            <ProfileInfo />
            <Posts/>
        </div>
    )
}
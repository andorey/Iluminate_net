import React from "react";
import css from './Profile.module.css';

export function Profile() {
    return (
        <div className={css.profile}>
            <div>
                <img
                    src="https://images.wallpaperscraft.com/image/mountain_lake_nature_81057_2560x1080.jpg"
                    alt="picture"/>
            </div>
        </div>
    )
}
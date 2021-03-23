import React from "react";
import {SettingsType} from "../redux/state";

type SettingsPageType = {
    settingsData: SettingsType
}

export function Settings(props: SettingsPageType) {
    const mySettings = props.settingsData.settings.map( el => <img src={el} alt='' /> )

    return (
        <div>
            <div>Danger! Keep out!</div>
            {mySettings}
        </div>
    )

}
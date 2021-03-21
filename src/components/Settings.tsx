import React from "react";

type SettingsType = {
    settings: string[]
}
type SettingsPageType = {
    settingsData: SettingsType
}

export function Settings(props: SettingsPageType) {
    const mySettings = props.settingsData.settings.map(el => <img src={el} alt='' /> )

    return (
        <div>
            <div>Ok</div>
            {mySettings}
        </div>
    )

}
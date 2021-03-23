import React, {useState} from "react";
import css from './ProfileInfo.module.css'

type AboutMyType = {
    arrayAboutMe: string[]
    image: string
}

export function ProfileInfo(props: AboutMyType) {

    const styleMyImage = () => ({
        width: '100px',
        height: '100px',
        border: '3px solid silver',
        borderRadius: '50%',
        backgroundPosition: '-17px -15px',
        backgroundSize: '140%',
        backgroundImage: `url(${props.image})`,
        transition: 'all 0.7s',
        overflow: 'hidden'
    })

    const styleImage = () => ({
        width: '100px',
        height: '100px',
        border: '3px solid steelblue',
        borderRadius: '90px 90px 10px 10px',
        backgroundPosition: '20px 20px',
        backgroundImage: '',
        transition: 'all 0.7s',
        overflow: 'hidden'
    })

    let [newStyle, setNewStyle] = useState(styleImage())

    const informationAboutMe = props.arrayAboutMe.map(el => <div>{el}</div>)


    return (
        <div>
            <div className={css.theme}>
                <img src="https://images.wallpaperscraft.com/image/mountain_lake_nature_81057_2560x1080.jpg" alt="" />
            </div>
            <div className={css.myPhoto}>
                <div className={css.icon}
                     onMouseOver={() => setNewStyle(styleMyImage())}
                     onMouseOut={() => setNewStyle(styleImage())}
                     style={newStyle}>
                    <img src="https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX29109486.jpg" alt="" />
                </div>
                <div className={css.aboutMe}>
                    {informationAboutMe}
                </div>
            </div>
        </div>
    )
}
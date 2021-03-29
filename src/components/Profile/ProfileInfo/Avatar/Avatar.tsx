import React, {Dispatch, SetStateAction} from "react";
import css from "../ProfileInfo.module.css";
import {StyleImageType, StyleMyImageType} from "../../../../redux/state";


export type PropsStyleType = {
    newStyle: StyleImageType | StyleMyImageType
    setNewStyle: Dispatch<SetStateAction<StyleImageType | StyleMyImageType>>
    styleMyImage: () => StyleMyImageType
    styleImage: () => StyleImageType
}

export function Avatar(props: PropsStyleType){
    return (
        <div className={css.icon}
             onMouseOver={() => props.setNewStyle(props.styleMyImage())}
             onMouseOut={() => props.setNewStyle(props.styleImage())}
             style={props.newStyle}>
            <img src="https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX29109486.jpg" alt="" />
        </div>
    )
}
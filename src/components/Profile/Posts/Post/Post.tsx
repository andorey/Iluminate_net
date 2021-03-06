import React from "react";
import css from './Post.module.css';

type propsType = {
    key: string
    message: string
    likeCounter: number
}

export function Post(props: propsType) {
    if(props.message.trim() === ''){
        return <div className={css.post}/>
    }

    return (
        <div className={css.post}>
            <div className={css.item}>
                <div className={css.photo}>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTa-Rtjo86Y2Wo-a_WCxI-Eao3f-L9VbK9eGMoBSg-Pq5dhkaSd" alt=""/>
                    <div className={css.message}> {props.message} </div>
                </div>
                <div className={css.like} key={props.key}>
                    <span>like : {props.likeCounter}</span>
                </div>
            </div>
        </div>
    );
}
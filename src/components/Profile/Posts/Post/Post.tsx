import React from "react";
import css from './Post.module.css';
import skeleton from '../../../Images/illuminate_skeleton.jpg';

type postType = {
    key: string
    message: string
    likeCounter: number
}

export function Post(props: postType) {
    if(props.message.trim() === ''){
        return <div className={css.post}/>
    }

    return (
        <div className={css.post}>
            <div className={css.item}>
                <div className={css.photo}>
                    <img src={skeleton} alt=""/>
                    <div className={css.message}> {props.message} </div>
                </div>
                <div className={css.like} key={props.key}>
                    <span>like : {props.likeCounter}</span>
                </div>
            </div>
        </div>
    );
}
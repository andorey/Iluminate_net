import React from "react";
import css from './Post.module.css';
import skeleton from '../../../Images/illuminate_skeleton.jpg';

type postType = {
    key: string
    post: string
    likesCount: number
    addLikes: () => void
}

export function Post(props: postType) {

    if(props.post.trim() === ''){
        return <div className={css.post}/>
    }


    return (
        <div className={css.post}>
            <div className={css.item}>
                <div className={css.photo}>
                    <img src={skeleton} alt=""/>
                    <div className={css.message}> {props.post} </div>
                </div>
                <div className={css.like} key={props.key}>
                    <span onClick={ props.addLikes }>like : {props.likesCount}</span>
                </div>
            </div>
        </div>
    );
}
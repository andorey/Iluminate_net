import React from "react";
import css from './Post.module.css';

type PostType = {
    key: string
    post: string
    likesCount: number
    addLikes: () => void
    photoPost: string
}


export function Post(props: PostType) {

    if(props.post.trim() === ''){
        return <div className={css.post}/>
    }


    return (
        <div className={css.post}>
            <div className={css.item}>
                <div className={css.photo}>
                    <img src={props.photoPost} alt=""/>
                    <div className={css.message}> {props.post} </div>
                </div>
                <div className={css.like} key={props.key}>
                    <span onClick={ props.addLikes }>like : {props.likesCount}</span>
                </div>
            </div>
        </div>
    );
}
import React from "react";
import css from './Posts.module.css';
import {Post} from "./Post/Post";

export function Posts() {
    return(
        <div className={css.posts}>
            <div className={css.textArea}>
                <h3>My posts :</h3>
                <textarea />
                <button>Add Post</button>
            </div>
            <Post message={'hello how are you my friends'} likeCounter={3}/>
            <Post message={'What do you think about this program?'} likeCounter={2}/>
            <Post message={'How do you live in this country?'} likeCounter={7}/>
        </div>
    )
}
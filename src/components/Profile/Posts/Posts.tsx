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
            <Post />
            <Post />
            <Post />
        </div>
    )
}
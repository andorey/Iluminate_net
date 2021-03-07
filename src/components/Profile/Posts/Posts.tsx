import React from "react";
import css from './Posts.module.css';

export function Posts() {
    return(
        <div className={css.posts}>
            <div className={css.textArea}>
                <h3>My posts :</h3>
            </div>
        </div>
    )
}
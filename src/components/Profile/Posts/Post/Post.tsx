import React from "react";
import css from './Post.module.css';

export const Post = () => {
    return (
        <div className={css.post}>
            <div className={css.item}>
                <div className={css.photo}>
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTa-Rtjo86Y2Wo-a_WCxI-Eao3f-L9VbK9eGMoBSg-Pq5dhkaSd"
                        alt=""/>
                        See this post to test the possibility of writing a sentence
                </div>
                <div className={css.like}>
                    <span>like :</span>

                </div>
            </div>
        </div>
    );
}
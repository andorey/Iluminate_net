import React, {ChangeEvent, KeyboardEvent} from "react";
import css from './Posts.module.css';
import {Post} from "./Post/Post";
import {PostsType} from "../../../redux/state";

type PropsType = {
    newPost: string
    photoPost: string
    myPosts: PostsType[]
    onChangePost: (e: ChangeEvent<HTMLTextAreaElement>)=> void
    onKeyPressAddPost: (e: KeyboardEvent<HTMLTextAreaElement>) => void
    addMyPostButton: () => void
    addLikes: (id: string) => void
}

export function Posts(props: PropsType) {

    const myPost = props.myPosts.map( el =>{
            const upDataLike = () => props.addLikes(el.id)
            return <Post key={el.id}
                         post={el.post}
                         likesCount={el.likesCount}
                         addLikes={upDataLike}
                         photoPost={props.photoPost}/>
            }
        )


    return(
        <div className={css.posts}>
            <div className={css.textArea}>
                <h3>My posts :</h3>
                <textarea value={ props.newPost }
                          onChange={ props.onChangePost }
                          onKeyPress={ props.onKeyPressAddPost }
                />
                <button onClick={ props.addMyPostButton }>Add Post</button>
            </div>
            { myPost }
        </div>
    )
}
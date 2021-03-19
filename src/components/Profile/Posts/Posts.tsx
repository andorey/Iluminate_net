import React, {ChangeEvent, KeyboardEvent, useState} from "react";
import css from './Posts.module.css';
import {Post} from "./Post/Post";
import {v1} from "uuid";


export function Posts() {
    const [myPost, setMyPost] = useState([
        {id: v1(), message: 'My first post', likeCounter: 5}
    ])

    const [newPost, setNewPost] = useState('')

    const onChangePost = (e: ChangeEvent<HTMLTextAreaElement>) => setNewPost(e.currentTarget.value)

    const addMyPost = (value: string) =>{
        const newMyPost = {id: v1(), message: value, likeCounter: 0}
        const addMyPost = [newMyPost ,...myPost]
        setMyPost(addMyPost)
    }

    const addMyPostButton = () =>{
        addMyPost(newPost)
        setNewPost('')
    }

    const onKeyPressAddPost = (e: KeyboardEvent<HTMLTextAreaElement>) =>{
        if (e.key === 'Enter' && newPost.trim()) {
            addMyPost(newPost.trim())
            e.preventDefault();
            setNewPost('')
        }
    }

    const myPosts = myPost.map( el => <Post key={el.id} message={el.message} likeCounter={el.likeCounter} /> )


    return(
        <div className={css.posts}>
            <div className={css.textArea}>
                <h3>My posts :</h3>
                <textarea value={ newPost }
                          onChange={ onChangePost }
                          onKeyPress={onKeyPressAddPost}
                />
                <button onClick={ addMyPostButton }>Add Post</button>
            </div>
            { myPosts }
        </div>
    )
}
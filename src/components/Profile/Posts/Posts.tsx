import React, {ChangeEvent, KeyboardEvent, useState} from "react";
import css from './Posts.module.css';
import {Post} from "./Post/Post";
import {v1} from "uuid";

type postType = {
    id: string
    message: string
    likeCounter: number
}

type propsType = {
    newPost: string
    myPosts: postType[]
    onChangePost: (e: ChangeEvent<HTMLTextAreaElement>)=> void
    onKeyPressAddPost: (e: KeyboardEvent<HTMLTextAreaElement>) => void
    addMyPostButton: () => void
}

export function Posts(props: propsType) {

    // const [newPost, setNewPost] = useState('')
    //
    // const onChangePost = (e: ChangeEvent<HTMLTextAreaElement>) => setNewPost(e.currentTarget.value)
    //
    // const onKeyPressAddPost = (e: KeyboardEvent<HTMLTextAreaElement>) =>{
    //     if (e.key === 'Enter' && newPost.trim()) {
    //         addMyPost(newPost.trim())
    //         e.preventDefault();
    //         setNewPost('')
    //     }
    // }
    //
    // const [myPosts, setMyPosts] = useState([
    //     {id: v1(), message: 'My first post', likeCounter: 5}
    // ])
    //
    // const addMyPost = (value: string) =>{
    //     const newMyPost = {id: v1(), message: value, likeCounter: 0}
    //     const addMyPost = [newMyPost ,...myPosts]
    //     setMyPosts(addMyPost)
    // }
    //
    // const addMyPostButton = () =>{
    //     addMyPost(newPost)
    //     setNewPost('')
    // }

    const myPost = props.myPosts.map( el => <Post key={el.id} message={el.message} likeCounter={el.likeCounter} /> )


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
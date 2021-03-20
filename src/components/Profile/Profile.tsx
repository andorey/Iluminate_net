import React, {ChangeEvent, KeyboardEvent, useState} from "react";
import css from './Profile.module.css';
import {Posts} from "./Posts/Posts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {v1} from "uuid";

const aboutMe = [
    'I am JS & TS Developer.',
    'And I think that React is very cool framework!',
    'If you don\'t believe me... You\'re right too'
]


export function Profile() {

    const [newPost, setNewPost] = useState('')

    const onChangePost = (e: ChangeEvent<HTMLTextAreaElement>) => setNewPost(e.currentTarget.value)

    const onKeyPressAddPost = (e: KeyboardEvent<HTMLTextAreaElement>) =>{
        if (e.key === 'Enter' && newPost.trim()) {
            addMyPost(newPost.trim())
            e.preventDefault();
            setNewPost('')
        }
    }

    const [myPosts, setMyPosts] = useState([
        {id: v1(), message: 'My first post', likeCounter: 5}
    ])

    const addMyPost = (value: string) =>{
        const newMyPost = {id: v1(), message: value, likeCounter: 0}
        const addMyPost = [newMyPost ,...myPosts]
        setMyPosts(addMyPost)
    }

    const addMyPostButton = () =>{
        addMyPost(newPost)
        setNewPost('')
    }

    return (
        <div className={css.profile}>
            <ProfileInfo arrayAboutMe={aboutMe}/>
            <Posts onChangePost={onChangePost}
                   onKeyPressAddPost={onKeyPressAddPost}
                   addMyPostButton={addMyPostButton}
                   newPost={newPost}
                   myPosts={myPosts}
            />
        </div>
    )
}
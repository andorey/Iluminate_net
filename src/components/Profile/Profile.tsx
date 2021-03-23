import React, {ChangeEvent, KeyboardEvent, useState} from "react";
import css from './Profile.module.css';
import {Posts} from "./Posts/Posts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {v1} from "uuid";
import {ProfilePageType} from "../../redux/state";

type ProfileDataType = {
    profileData: ProfilePageType
}

export function Profile(props: ProfileDataType) {

    const [myPosts, setMyPosts] = useState(props.profileData.posts)

    const addMyPost = (value: string) =>{
        const newMyPost = {id: v1(), post: value, likesCount: 0}
        const addMyPost = [newMyPost ,...myPosts]
        setMyPosts(addMyPost)
    }

    const addMyPostButton = () =>{
        addMyPost(newPost)
        setNewPost('')
    }

    const [newPost, setNewPost] = useState('')

    const addLikes = (id: string) => {
        myPosts.map(el => el.id === id ? el.likesCount++ : el.likesCount)
        setMyPosts([...myPosts])
    }

    const onChangePost = (e: ChangeEvent<HTMLTextAreaElement>) => setNewPost(e.currentTarget.value)

    const onKeyPressAddPost = (e: KeyboardEvent<HTMLTextAreaElement>) =>{
        if (e.key === 'Enter' && newPost.trim()) {
            addMyPost(newPost.trim())
            e.preventDefault();
            setNewPost('')
        }
    }

    return (
        <div className={css.profile}>
            <ProfileInfo arrayAboutMe={props.profileData.aboutMe}
                         image={props.profileData.myPhoto}/>
            <Posts onChangePost={onChangePost}
                   onKeyPressAddPost={onKeyPressAddPost}
                   addMyPostButton={addMyPostButton}
                   newPost={newPost}
                   myPosts={myPosts}
                   addLikes={addLikes}
                   photoPost={props.profileData.photoPost}
            />
        </div>
    )
}
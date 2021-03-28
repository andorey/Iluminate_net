import React, {ChangeEvent, KeyboardEvent, useState} from "react";
import css from './Profile.module.css';
import {Posts} from "./Posts/Posts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {addLikes, addPost, ProfilePageType} from "../../redux/state";

type ProfileDataType = {
    profileData: ProfilePageType
}

export function Profile(props: ProfileDataType) {

    const [newPost, setNewPost] = useState('')

    const addMyPostButton = () =>{
        addPost(newPost)
        setNewPost('')
    }

    const onChangePost = (e: ChangeEvent<HTMLTextAreaElement>) => setNewPost(e.currentTarget.value)

    const onKeyPressAddPost = (e: KeyboardEvent<HTMLTextAreaElement>) =>{
        if ( !e.shiftKey && e.key === 'Enter' && newPost.trim() ) {
            addPost(newPost.trim())
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
                   myPosts={props.profileData.posts}
                   addLikes={addLikes}
                   photoPost={props.profileData.photoPost}
            />
        </div>
    )
}
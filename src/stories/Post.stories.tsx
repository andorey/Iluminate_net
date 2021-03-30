import React, {useState} from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import {Story, Meta} from '@storybook/react/types-6-0';
import {Post, PostType} from "../components/Profile/Posts/Post/Post";
import {action} from "@storybook/addon-actions";
import img from '../components/Images/illuminate_skeleton.jpg'
import {_state, addLikes} from "../redux/state";

export default {
    title: 'IlluminateNet/Post',
    component: Post
} as Meta;

// const myPost = _state.profilePage.posts[0]
// const upDataLike = () => addLikes(myPost.id)
//
// const Template: Story<PostType> = (args) => {
//
//     return <Post {...args} />
// }
//
// export const PostExample = Template.bind({});
// PostExample.args = {
//   key: myPost.id,
//   post: myPost.post,
//   likesCount: myPost.likesCount,
//   addLikes: upDataLike,
//   photoPost: img,
// }

export const PostExampleData = () => {

    const myPost = _state.profilePage.posts[0]
            const upDataLike = () => addLikes(myPost.id)
            return <Post key={myPost.id}
                         post={myPost.post}
                         likesCount={myPost.likesCount}
                         addLikes={upDataLike}
                         photoPost={img}/>

}

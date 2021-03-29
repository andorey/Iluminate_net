import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';
import {Post, PostType} from "../components/Profile/Posts/Post/Post";
import {action} from "@storybook/addon-actions";
import img from '../components/Images/illuminate_skeleton.jpg'

export default {
  title: 'IlluminateNet/Post',
  component: Post
} as Meta;

const Template: Story<PostType> = (args) => <Post {...args} />;

export const PostExample = Template.bind({});
PostExample.args = {
  post: 'Hello how are you?',
  likesCount: 5,
  addLikes: action('add new like'),
  photoPost: img,

};
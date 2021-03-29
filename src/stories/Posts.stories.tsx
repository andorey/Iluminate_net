import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';
import {Posts, AddPostsType} from "../components/Profile/Posts/Posts";
import {action} from "@storybook/addon-actions";
import img from '../components/Images/illuminate_skeleton.jpg'
import {_state} from "../redux/state";

export default {
  title: 'IlluminateNet/Posts',
  component: Posts
} as Meta;

const Template: Story<AddPostsType> = (args) => <Posts {...args} />;

export const PostsExample = Template.bind({});
PostsExample.args = {
  newPost: 'new my Post',
  photoPost: img,
  myPosts: _state.profilePage.posts,
  onChangePost: action('types letters in input'),
  onKeyPressAddPost: action('press Enter button'),
  addMyPostButton: action('press button'),
  addLikes: action('add likes'),

};
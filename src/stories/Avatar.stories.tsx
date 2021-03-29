import React, { useState} from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';
import {Avatar, PropsStyleType} from "../components/Profile/ProfileInfo/Avatar/Avatar";
import {CreateStyleImage, CreateStyleMyImage,} from "../redux/state";


export default {
  title: 'IlluminateNet/Avatar',
  component: Avatar
} as Meta;

const Template: Story<PropsStyleType> = (args) => <Avatar {...args} />;

export const AvatarExample = Template.bind({});


export const AvatarExampleState = () => {
  let [newStyle, setNewStyle] = useState(CreateStyleImage())
  return (
      <Avatar newStyle={newStyle} setNewStyle={setNewStyle} styleMyImage={CreateStyleMyImage} styleImage={CreateStyleImage}/>
  )
}

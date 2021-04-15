import React from 'react';
import { Story, Meta } from '@storybook/react';
import ProfileIcon, { Props } from '.';

export default {
  title: 'Design System/Atoms/ProfileIcon',
  component: ProfileIcon,
  decorators: [
    (Story) => <div style={{ padding: '3em', backgroundColor: '#192947' }}>{Story()}</div>,
  ],
} as Meta;

const Template: Story<Props> = (args) => {
  return <ProfileIcon {...args} />;
};

export const Default = Template.bind({});

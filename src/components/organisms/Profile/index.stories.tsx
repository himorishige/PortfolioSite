import React from 'react';
import { Story, Meta } from '@storybook/react';
import Profile from '.';

export default {
  title: 'Design System/Organisms/Profile',
  component: Profile,
} as Meta;

export const Default: Story = () => <Profile />;

import React from 'react';
import { Story, Meta } from '@storybook/react';
import Spinner from '.';

export default {
  title: 'Design System/Molecules/Spinner',
  component: Spinner,
} as Meta;

export const Default: Story = () => <Spinner />;

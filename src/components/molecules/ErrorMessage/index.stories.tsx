import React from 'react';
import { Story, Meta } from '@storybook/react';
import ErrorMessage from '.';

export default {
  title: 'Design System/Molecules/ErrorMessage',
  component: ErrorMessage,
} as Meta;

export const Default: Story = () => <ErrorMessage />;

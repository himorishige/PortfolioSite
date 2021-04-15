import React from 'react';
import { Story, Meta } from '@storybook/react';
import Header from '.';

export default {
  title: 'Design System/Organisms/Header',
  component: Header,
} as Meta;

const Template: Story = (args) => {
  return <Header {...args} />;
};

export const Default = Template.bind({});

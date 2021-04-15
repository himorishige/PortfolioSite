import React from 'react';
import { Story, Meta } from '@storybook/react';
import { actions } from '@storybook/addon-actions';
import Contact from '.';

export default {
  title: 'Design System/Organisms/Contact',
  component: Contact,
} as Meta;

const Template: Story = (args) => {
  return <Contact {...args} />;
};

export const Default = Template.bind({});

Default.args = {
  type: 'text',
  name: 'name',
  placeholder: 'Name',
  inputValue: '',
  ...actions('handleChange'),
};

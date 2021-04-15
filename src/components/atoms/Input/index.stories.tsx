import React from 'react';
import { Story, Meta } from '@storybook/react';
import Input, { Props } from '.';

export default {
  title: 'Design System/Atoms/Input',
  component: Input,
  decorators: [
    (Story) => <div style={{ padding: '3em', backgroundColor: '#192947' }}>{Story()}</div>,
  ],
  argTypes: {
    handleChange: { action: 'changed' },
  },
} as Meta;

const Template: Story<Props> = (args) => {
  return <Input {...args} />;
};

export const Default = Template.bind({});

Default.args = {
  type: 'text',
  label: 'name',
  placeholder: 'Name',
};

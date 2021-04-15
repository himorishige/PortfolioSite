import React from 'react';
import { Story, Meta } from '@storybook/react';
import Button, { ButtonProps } from '.';

export default {
  title: 'Design System/Atoms/Button',
  component: Button,
  argTypes: {
    handleClick: { action: 'handleClick' },
  },
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'Button',
  disabled: false,
};
Primary.decorators = [
  (StoryFn) => (
    <div style={{ padding: '3em', backgroundColor: 'var(--primary-color)' }}>{StoryFn()}</div>
  ),
];

export const Secondary = Template.bind({});
Secondary.args = {
  primary: false,
  label: 'Button',
  disabled: false,
};
Secondary.decorators = [
  (Story) => <div style={{ padding: '3em', backgroundColor: '#fff' }}>{Story()}</div>,
];

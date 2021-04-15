import React from 'react';
import { Story, Meta } from '@storybook/react';
import Typography, { Props } from '.';

export default {
  title: 'Design System/Atoms/Typography',
  component: Typography,
  argTypes: {
    size: {
      control: {
        type: 'inline-radio',
        options: ['small', 'medium', 'large'],
      },
    },
    align: {
      control: {
        type: 'inline-radio',
        options: ['left', 'center', 'right'],
      },
    },
  },
} as Meta;

const sampleText = 'This component is Typography.';

const Template: Story<Props> = (args) => <Typography {...args}>{sampleText}</Typography>;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  size: 'medium',
  align: 'left',
};
Primary.decorators = [(Story) => <div style={{ padding: '3em' }}>{Story()}</div>];

export const Secondary = Template.bind({});
Secondary.args = {
  ...Primary.args,
  primary: false,
};
Secondary.decorators = [
  (Story) => <div style={{ padding: '3em', backgroundColor: '#192947' }}>{Story()}</div>,
];

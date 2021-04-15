import React from 'react';
import { Story, Meta } from '@storybook/react';
import Heading, { Props } from '.';

export default {
  title: 'Design System/Atoms/Heading',
  component: Heading,
  argTypes: {
    size: {
      control: {
        type: 'inline-radio',
        options: ['small', 'medium', 'large'],
      },
    },
  },
} as Meta;

const sampleText = 'This component is Heading.';

const Template: Story<Props> = (args) => <Heading {...args}>{sampleText}</Heading>;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  size: 'medium',
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

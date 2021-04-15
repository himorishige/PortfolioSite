import React from 'react';
import { Story, Meta } from '@storybook/react';
import TextArea, { Props } from '.';

export default {
  title: 'Design System/Atoms/TextArea',
  component: TextArea,
  decorators: [
    (Story) => <div style={{ padding: '3em', backgroundColor: '#192947' }}>{Story()}</div>,
  ],
  argTypes: {
    handleChange: { action: 'changed' },
  },
} as Meta;

const Template: Story<Props> = (args) => {
  return <TextArea {...args} />;
};

export const Default = Template.bind({});

Default.args = {
  label: 'name',
  placeholder: 'Name',
};

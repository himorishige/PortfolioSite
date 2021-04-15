import React from 'react';
import { Story, Meta } from '@storybook/react';
import TagItem, { Props } from '.';

export default {
  title: 'Design System/Atoms/TagItem',
  component: TagItem,
} as Meta;

const Template: Story<Props> = (args) => {
  return <TagItem {...args} />;
};

export const Default = Template.bind({});

Default.args = {
  label: 'React',
};

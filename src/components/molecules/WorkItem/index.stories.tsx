import React from 'react';
import { Story, Meta } from '@storybook/react';
import WorkItem, { Props } from '.';

export default {
  title: 'Design System/Molecules/WorkItem',
  component: WorkItem,
  argTypes: {
    handleClick: { action: 'handleClick' },
  },
} as Meta;

const Template: Story<Props> = (args) => <WorkItem {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'Work Title test test',
  id: '2',
  image: '/assets/images/ocean.jpg',
};

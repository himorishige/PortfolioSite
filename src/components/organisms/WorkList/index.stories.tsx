import React from 'react';
import { Story, Meta } from '@storybook/react';
import WorkList, { Props } from '.';
import workData from 'src/data/works.json';

const works = workData;

export default {
  title: 'Design System/Organisms/WorkList',
  component: WorkList,
} as Meta;

const Template: Story<Props> = (args) => <WorkList {...args} />;

export const Default = Template.bind({});

import React from 'react';
import { Story, Meta } from '@storybook/react';
import SkillList from '.';

export default {
  title: 'Design System/Molecules/SkillList',
  component: SkillList,
  decorators: [
    (Story) => (
      <div style={{ padding: '3em', backgroundColor: '#192947' }}>
        <Story />
      </div>
    ),
  ],
} as Meta;

const Template: Story = (args) => <SkillList />;

export const Default = Template.bind({});

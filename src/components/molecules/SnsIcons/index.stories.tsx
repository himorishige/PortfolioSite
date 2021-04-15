import React from 'react';
import { Story, Meta } from '@storybook/react';
import SnsIcons from '.';

export default {
  title: 'Design System/Molecules/SnsIcons',
  component: SnsIcons,
  decorators: [
    (StoryFn) => (
      <div style={{ padding: '3em', backgroundColor: 'var(--primary-color)' }}>{StoryFn()}</div>
    ),
  ],
} as Meta;

export const Default: Story = () => <SnsIcons />;

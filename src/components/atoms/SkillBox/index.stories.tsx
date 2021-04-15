import React from 'react';
import { Story, Meta } from '@storybook/react';
import SkillBox, { Props } from '.';

export default {
  title: 'Design System/Atoms/SkillBox',
  component: SkillBox,
} as Meta;

const sampleImage = '/assets/images/react-logo@2x.png';

const Template: Story<Props> = (args) => <SkillBox {...args} />;

export const Default = Template.bind({});
Default.args = {
  src: sampleImage,
  alt: 'react',
};
// Primary.decorators = [(Story) => <div style={{ padding: '3em' }}>{Story()}</div>];

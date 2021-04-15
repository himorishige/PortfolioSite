import React from 'react';
import { Story, Meta } from '@storybook/react';
import Modal, { Props } from '.';
import { Work } from 'src/types';

import worksData from 'src/data/works.json';

const works: any = worksData;

export default {
  title: 'Design System/Organisms/Modal',
  component: Modal,
} as Meta;

const Template: Story<Props> = (args) => <Modal {...args} />;

export const Default = Template.bind({});

Default.args = {
  workId: '1',
  works: works,
};

Default.argTypes = {
  setIsOpen: { action: 'handleClick' },
};

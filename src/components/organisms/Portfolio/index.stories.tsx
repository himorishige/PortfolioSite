import React, { useEffect } from 'react';
import { useFetchWorks } from 'src/hooks/useFetchWorks';
import { Story, Meta } from '@storybook/react';
import Portfolio, { Props } from '.';

// import works from 'src/data/works.json';

export default {
  title: 'Design System/Organisms/Portfolio',
  component: Portfolio,
  argTypes: {
    handleClick: { action: 'handleClick' },
  },
} as Meta;

const Template: Story<Props> = (args) => {
  const { fetchWorks, works } = useFetchWorks();
  useEffect(() => {
    fetchWorks();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return <Portfolio {...args} works={works} />;
};

export const Default = Template.bind({});

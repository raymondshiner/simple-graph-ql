import { Meta, Story } from '@storybook/react';
import { StyledApp } from './StyledApp';

export default {
  component: StyledApp,
  title: 'StyledApp',
} as Meta;

const Template: Story = (args) => <StyledApp>Some Text</StyledApp>;

export const Primary = Template.bind({});
Primary.args = {};

import { StyledNavButton } from '@simple-graph-ql/ui';
import { Meta, Story } from '@storybook/react';
import { App } from './app';

export default {
  component: App,
  title: 'App',
} as Meta;

const Template: Story = (args) => (
  <StyledNavButton>
    <App {...args} />
  </StyledNavButton>
);
export const Primary = Template.bind({});
Primary.args = {};

import { Meta, Story } from '@storybook/react';
import { StyledNavButton } from './StyledNavButton';

export default {
  component: StyledNavButton,
  title: 'StyledNavButton',
} as Meta;

const Template: Story = (args) => <StyledNavButton>Some Text</StyledNavButton>;

export const Primary = Template.bind({});
Primary.args = {};

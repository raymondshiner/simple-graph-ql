import { Meta, Story } from '@storybook/react';
import { StyledTitle } from './StyledTitle';

export default {
  component: StyledTitle,
  title: 'StyledTitle',
} as Meta;

const Template: Story = (args) => <StyledTitle>Title Here</StyledTitle>;

export const Primary = Template.bind({});
Primary.args = {};

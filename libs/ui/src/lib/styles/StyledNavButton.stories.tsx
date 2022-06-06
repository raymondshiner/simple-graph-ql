import { Meta, Story } from '@storybook/react';
import { StyledNavButton } from './StyledNavButton';

export default {
  component: StyledNavButton,
  title: 'StyledNavButton',
} as Meta;

const Template: Story = (args) => (
  <div style={{ background: '#bdbdbd', padding: 20 }}>
    <StyledNavButton {...args}>Some Text</StyledNavButton>
  </div>
);
export const Primary = Template.bind({});
Primary.args = { selected: false };

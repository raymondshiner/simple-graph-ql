import { Meta, Story } from '@storybook/react';
import styled from 'styled-components';
import { StyledFlexbox } from './StyledFlexbox';

export default {
  component: StyledFlexbox,
  title: 'StyledFlexbox',
} as Meta;

const BorderedBox = styled.div`
  border: 1px solid black;
`;

const Template: Story = (args) => (
  <StyledFlexbox>
    <BorderedBox>Item A</BorderedBox>
    <BorderedBox>Item B</BorderedBox>
    <BorderedBox>Item C</BorderedBox>
  </StyledFlexbox>
);

export const Primary = Template.bind({});
Primary.args = {};

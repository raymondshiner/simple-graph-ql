import React from 'react';
import styled from 'styled-components';

interface Props extends React.HTMLAttributes<HTMLButtonElement> {
  selected?: boolean;
}

export const StyledNavButton = styled.button<Props>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 10px;
  gap: 10px;
  border-radius: 17px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border: none;
  text-align: center;
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;

  background-color: ${(props) => (props.selected ? '#D0FFDB' : '#ffffff')};
  cursor: pointer;
  :hover {
    background-color: ${(props) => (props.selected ? '#a8ffbc' : '#e3e3e3')};
  }
`;

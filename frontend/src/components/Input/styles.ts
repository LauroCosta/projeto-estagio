import styled, { css } from 'styled-components';
import Tooltip from '../Tooltip';

interface ContainerProps {
  isFilled: boolean;
  isFocused: boolean;
  isErrored: boolean;
}

export const Container = styled.div<ContainerProps>`
  background: #E0E0E0;
  border-radius: 10px;
  padding: 16px;
  width: 100%;

  border: 2px solid #E0E0E0;
  color: #666360;

  display: flex;
  align-items: center;

  & + div {
    margin-top: 8px;
  }

  ${props =>
    props.isErrored &&
    css`
      border-color: #c53030;
    `}


  ${props =>
    props.isFocused &&
    css`
      transform: translate 2s;
      color: #529670;
      border-color: #529670;
    `}

  ${props =>
    props.isFilled &&
    css`
      color: #529670;
    `}



  input {
    flex: 1;
    background: transparent;
    border: 0;
    color: #312e38;

    &::placeholder {
      color: #666360;
    }
  }

  svg {
    margin-right: 16px;
  }
`;

export const Error = styled(Tooltip)`
  height: 20px;
  margin-left: 16px;
  svg {
    margin: 0;
  }

  span {
    background: #c53030;
    color: #fff;

    &::before {
      border-color: #c53030 transparent;
    }
  }
`;

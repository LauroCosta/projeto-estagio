import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;

  width: 250px;
  height: 100vh;
  padding: 1.25rem;

  background: white;
  display: flex;
  flex-direction: column;

  &.show {
    left: -23.75rem;
    transition: left 0.4s ease;
  }

  > button {
    position: absolute;
    top: 1.25rem;
    right: 1.25rem;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Item = styled(Link)`
  padding: 0.625rem 0;
  color: black;
  font-size: 1rem;
`;

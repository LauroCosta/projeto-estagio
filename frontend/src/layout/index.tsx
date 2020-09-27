import React from 'react';

import Sidebar from '../components/Sidebar';

import { Content, Container } from './styles';

const Layout: React.FC = ({ children }) => {
  return (
    <Container>
      <Sidebar />
      <Content>{children}</Content>
    </Container>
  );
};

export default Layout;

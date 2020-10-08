import React, { useCallback, useState } from 'react';
import { Container, Content, Item } from './styled';

const Sidebar: React.FC = () => {
  const [visible, setVisible] = useState(false);

  const handleToggleVisible = useCallback(() => {
    setVisible(true);
  }, []);

  return (
    <Container className={visible ? 'show' : ''}>
      <Content>
        <Item to="/dashboard">Dashboard</Item>
        <Item to="/place">Locais</Item>
        <Item to="/buscar">Buscar</Item>
        <Item to="/about">About</Item>
      </Content>
    </Container>
  );
};

export default Sidebar;

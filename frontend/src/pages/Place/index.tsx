import React, { useRef, useCallback } from 'react';

import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import Button from '../../components/Button';
import Input from '../../components/Input';
import { Container, Content } from './styles';

const Place: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  function teste() {
    console.log('teste');
  }

  return (
    <Container>
      <Content>
        <Form ref={formRef} onSubmit={teste}>
          <h1>Novo local</h1>

          <Input type="text" name="place" placeholder="Local" />

          <Button type="submit">Entrar</Button>
        </Form>
      </Content>
    </Container>
  );
};

export default Place;

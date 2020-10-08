import React, { useRef, useCallback } from 'react';

import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import Button from '../../components/Button';
import Input from '../../components/Input';
import { Container, Content } from './styles';

const Search: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  return (
    <Container>
      <Content>
        <Form ref={formRef} onSubmit={teste}>
          <h1>Buscar Prontuário</h1>

          <Input
            type="number"
            name="numberMedicalService"
            placeholder="Número"
          />

          <Button type="submit">Buscar</Button>
        </Form>
      </Content>
    </Container>
  );
};

export default Search;

import React from 'react';
import search from '../../images/search.svg';
import { Container, Input, Button } from './style';

export const InputSearch = () => {
  return (
    <Container>
      <Input type="text" />
      <Button>
        <img src={search} alt="search" width="20" />
      </Button>
    </Container>
  );
};

import React from 'react';
import { InputSearch } from '../InputSearch';
import { SearchContainer, Subtitle, Title } from './style';

export const SearchForm = () => {
  return (
    <SearchContainer>
      <Title>starwars</Title>
      <Subtitle>personagens</Subtitle>
      <InputSearch />
    </SearchContainer>
  );
};

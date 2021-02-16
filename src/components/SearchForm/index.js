import React from 'react';
import searchIcon from '../../images/search.svg';
import {
  SearchContainer,
  Subtitle,
  Title,
  Container,
  Input,
  Button,
} from './style';

export const SearchForm = (props) => {
  return (
    <SearchContainer>
      <Title>starwars</Title>
      <Subtitle>personagens</Subtitle>
      <Container>
        <Input type="text" value={props.search} onChange={props.setsearch} />
        <Button onClick={props.searchapi}>
          <img src={searchIcon} alt="search" width="20" />
        </Button>
      </Container>
    </SearchContainer>
  );
};

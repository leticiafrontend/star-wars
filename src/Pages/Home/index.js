import React from 'react';
import { Cards } from '../../components/Cards';
import { SearchForm } from '../../components/SearchForm';
import GlobalStyle from '../../styles/global';
import { PageContainer } from './style';
import { Modal } from '../../components/Modal';

export const Home = () => {
  return (
    <PageContainer>
      <GlobalStyle />
      <SearchForm />
      <Cards />
      <Modal />
    </PageContainer>
  );
};

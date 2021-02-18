import React, { useState } from 'react';
import { Spinner } from '../../components/Spinner';
import { Card } from '../../components/Card';
import { SearchForm } from '../../components/SearchForm';
import GlobalStyle from '../../styles/global';
import { PageContainer, CardsContainer } from './style';

export const Home = () => {
  const urlApi = 'https://swapi.dev/api/people/?search=';
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(false);
  const [resultApi, setResultApi] = useState('');
  const [erro, setErro] = useState(false);

  const inputSearch = ({ target }) => {
    setSearch(target.value);
  };

  const searchApi = () => {
    setLoading(true);
    const resultSearch = urlApi + search;
    const result = resultSearch.replaceAll(' ', '+');

    (async () => {
      const response = await fetch(result);
      const { results } = await response.json();
      if (results.length === 0) {
        setErro(true);
      } else {
        setErro(false);
      }
      setResultApi(results);
      setLoading(false);
    })();
  };

  return (
    <PageContainer>
      <GlobalStyle />
      <SearchForm
        search={search}
        setsearch={inputSearch}
        searchapi={searchApi}
      />
      {loading ? (
        <Spinner />
      ) : (
        <CardsContainer>
          {resultApi
            ? resultApi.map((item, index) => (
                <Card
                  name={item.name}
                  key={index}
                  idCard={index}
                  gender={item.gender}
                  height={item.height}
                  mass={item.mass}
                  birthYear={item.birth_year}
                  hairColor={item.hair_color}
                  skinColor={item.skin_color}
                  eyeColor={item.eye_color}
                  films={item.films}
                />
              ))
            : ''}
          {erro ? (
            <h2
              style={{ color: '#fff', margin: '30px 0', textAlign: 'center' }}
            >
              Nenhum personagem encontrado.
            </h2>
          ) : (
            ''
          )}
        </CardsContainer>
      )}
    </PageContainer>
  );
};

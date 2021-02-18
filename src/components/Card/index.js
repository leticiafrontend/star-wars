import React from 'react';
import { CardContainer, Title } from './style';

export const Card = (props) => {
  return (
    <CardContainer>
      <Title>{props.name}</Title>
      <p>
        <b>Gênero:</b> {props.gender}
      </p>
      <p>
        <b>Altura:</b> {props.height}
      </p>
      <p>
        <b>Peso:</b> {props.mass}
      </p>
      <p>
        <b>Cor do cabelo: </b>
        {props.hairColor}
      </p>
      <p>
        <b>Cor da pele:</b> {props.skinColor}
      </p>
      <p>
        <b>Cor dos olhos:</b> {props.eyeColor}
      </p>
      <p>
        <b>Ano de Nascimento:</b> {props.birthYear}
      </p>
      {/* <Title>Filmes</Title>
      {props.films
        ? props.films.map((item, index) => (
            <p key={index}>
              <b>{item}</b>
            </p>
          ))
        : ''} */}
    </CardContainer>
  );
};

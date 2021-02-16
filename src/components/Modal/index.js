import React from 'react';
import {
  ModalContainer,
  ModalContent,
  Name,
  Infos,
  InfoColumn,
  Info,
  Button,
} from './style';

export const Modal = (props) => {
  return (
    <ModalContainer id={`modal-${props.idModal}`}>
      <ModalContent>
        <Name>{props.name}</Name>
        <Infos>
          <InfoColumn>
            <Info>Gênero: {props.gender}</Info>
            <Info>Altura: {props.height}</Info>
            <Info>Peso: {props.mass}</Info>
            <Info>Ano de Nascimento: {props.birthYear}</Info>
          </InfoColumn>
          <InfoColumn>
            <Info>Cor do Cabelo: {props.hairColor}</Info>
            <Info>Cor da Pele: {props.skinColor}</Info>
            <Info>Cor dos Olhos: {props.eyeColor}</Info>
          </InfoColumn>
        </Infos>
        <Name>filmes</Name>
        <Name>veículos</Name>
        <Info>{props.vehicle}</Info>
        <Button onClick={props.close}>Fechar</Button>
      </ModalContent>
    </ModalContainer>
  );
};

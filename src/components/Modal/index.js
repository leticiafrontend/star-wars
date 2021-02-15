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

export const Modal = () => {
  return (
    <ModalContainer>
      <ModalContent>
        <Name>lucky skywalker</Name>
        <Infos>
          <InfoColumn>
            <Info>altura</Info>
            <Info>nmome</Info>
          </InfoColumn>
          <InfoColumn>
            <Info>genero</Info>
            <Info>tamanho</Info>
          </InfoColumn>
        </Infos>
        <Name>filmes</Name>
        <Info>nmome</Info>
        <Info>tamanho</Info>
        <Name>veículos</Name>
        <Info>nmome</Info>
        <Info>tamanho</Info>
        <Button>Fechar</Button>
      </ModalContent>
    </ModalContainer>
  );
};

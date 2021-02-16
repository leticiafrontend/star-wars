import React from 'react';
import { Button, CardContainer } from './style';

export const Card = (props) => {
  return (
    <CardContainer>
      <h2>{props.name}</h2>
      <Button onClick={props.open}>Veja mais...</Button>
    </CardContainer>
  );
};

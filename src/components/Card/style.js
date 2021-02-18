import styled from 'styled-components';

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 4px;
  background: rgba(0, 0, 0, 0);
  border: 2px solid #fff;
  color: #fff;
  text-align: initial;
  flex-basis: 300px;
  padding: 40px;
  margin: 40px;
  &:hover {
    box-shadow: 0 0 16px 0 #fbe000;
    -moz-box-shadow: 0 0 16px 0 #fbe000;
    -webkit-box-shadow: 0 0 16px 0 #fbe000;
    transition: 0.4s;
  }
`;

export const Title = styled.h2`
  font-family: starwars;
  text-align: center;
  text-transform: lowercase;
  font-size: 25pxpx;
  padding: 0 0 10px 0;
  color: #fbe000;
`;

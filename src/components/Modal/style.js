import styled from 'styled-components';
import background from '../../images/background.png';

export const ModalContainer = styled.div`
  height: 100vh;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.9);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2000;
  display: none;
  justify-content: center;
  align-items: center;
`;

export const ModalContent = styled.div`
  background-image: url(${background});
  border: 1px solid #fff;
  border-radius: 4px;
  padding: 40px;
  box-shadow: 2px 2px 10px #00000029;
  position: relative;
`;

export const Name = styled.h2`
  font-family: 'starwars';
  color: #fbe000;
  font-size: 35px;
`;

export const Infos = styled.div`
  display: flex;
  column-gap: 20px;
`;

export const InfoColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Info = styled.p`
  color: #fff;
  margin: 10px 0;
`;

export const Button = styled.button`
  border-radius: 4px;
  box-shadow: 0 0 16px 0px #e00000;
  background: #cccccc00;
  border: 2px solid #fff;
  padding: 0.6rem 1rem;
  color: #fff;
  cursor: pointer;
  margin-top: 2rem;
  width: 100%;
  &:hover {
    box-shadow: 0 0 20px 0px #e00000;
  }
`;

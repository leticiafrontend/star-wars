import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const Input = styled.input`
  width: 100%;
  border-radius: 4px;
  box-shadow: 0 0 16px 0px #e00000;
  background: #cccccc00;
  border: 2px solid #fff;
  padding: 0.5rem 1rem;
  font-size: 1.25rem;
  line-height: 1.5;
  color: #fff;
  transition: box-shadow 0.2s ease-in;
  &:hover,
  :focus {
    box-shadow: 0 0 20px 0px #e00000;
  }
`;

export const Button = styled.a`
  border-radius: 4px;
  box-shadow: 0 0 16px 0px #0000d2;
  background: #cccccc00;
  border: 2px solid #fff;
  padding: 0.6rem 1rem;
  color: #fff;
  margin-left: 1rem;
  cursor: pointer;
  height: 50px;
  width: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    box-shadow: 0 0 20px 0px #0000d2;
  }
`;

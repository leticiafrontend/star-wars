import styled from 'styled-components';

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 4px;
  background: rgba(0, 0, 0, 0);
  border: 2px solid #fff;
  color: #fff;
  text-align: center;
  min-width: 300px;
  padding: 40px;
  margin: 40px;
  &:hover {
    box-shadow: 0 0 16px 0 #fbe000;
    -moz-box-shadow: 0 0 16px 0 #fbe000;
    -webkit-box-shadow: 0 0 16px 0 #fbe000;
    transition: 0.4s;
  }
`;

export const Button = styled.button`
  border-radius: 4px;
  box-shadow: 0 0 16px 0px #0000d2;
  background: #cccccc00;
  border: 2px solid #fff;
  padding: 0.6rem 1rem;
  color: #fff;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
  margin-left: 0;
  &:hover {
    box-shadow: 0 0 20px 0px #0000d2;
  }
`;

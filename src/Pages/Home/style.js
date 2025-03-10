import styled from 'styled-components';
import background from '../../images/background.png';

export const PageContainer = styled.div`
  min-height: 100vh;
  padding: 0 30px;
  background-image: url(${background});
`;

export const CardsContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

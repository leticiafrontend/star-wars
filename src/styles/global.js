import { createGlobalStyle } from 'styled-components';
import StarWars from '../fonts/starjedi-webfont.woff';

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Lato', Arial, Helvetica, sans-serif;
  }

  @font-face {
    font-family: 'starwars';
    src: url(${StarWars}) format('woff');
  }
  
  button,
  input{
    outline: 0;
  }
`;

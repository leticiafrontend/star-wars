import React from 'react';
import GlobalStyle from './styles/global';

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <div className="App">
        <h2 style={{ fontFamily: 'starwars' }}>star wars</h2>
      </div>
    </>
  );
};

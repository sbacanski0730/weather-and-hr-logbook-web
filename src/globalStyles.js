import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *{
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,600;1,100;1,200;1,300;1,400;1,600&display=swap');
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 16px;
  }

  body {
    font-family: 'Montserrat', sans-serif;
    background-color: #efefef;
  }
`;

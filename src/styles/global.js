import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: borded-box;
  }
  body{
    font-family: 'Nunito Sans', sans-serif;
    font-size: 1.2rem;
    font-weight: 300;
    background-color: #202c37;
    color: hsl(0, 0%, 100%);
  }
`
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
    background-color: ${props => props.theme === 'dark' ? "hsl(207, 26%, 17%)" : "hsl(0, 0%, 98%)"};
  }
`
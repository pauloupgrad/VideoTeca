import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body {
        font-family: 'Lato', sans-serif;
    } 
    
    input:focus, textarea:focus {
        outline: none;
    }
`
export default GlobalStyle;
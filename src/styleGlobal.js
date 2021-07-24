import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        color: var(---cor-white);
    }

    :root{
    --cor-primary: #181818;
    --cor-secondary: #323232;
    --cor-red: #FF2626;
    --cor-white: #f2f2f2;
    --cor-cinza: #ddd;
    }

    html,body{
        font-family: 'Roboto', sans-serif;
        background-color: var(--cor-primary);
        
    }
    
    input:focus, textarea:focus {
        outline: none;
    }
`
export default GlobalStyle;
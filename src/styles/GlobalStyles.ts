import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    :root {
        font-size: 16px;
    }

    body {
       
        width: 100vw;
    }

    *,
    *::before,
    *::after {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    button {
        cursor: pointer;
        border: none;
        background: none;
    }
`;

export default GlobalStyles;

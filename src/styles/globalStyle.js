  
import { createGlobalStyle } from 'styled-components';
import { respondTo } from './mixins';

const GlobalStyles = createGlobalStyle`
    *,
    *::before,
    *::after {
        margin: 0; /* by default browsers apply a certain margin or padding */
        padding: 0; 
        box-sizing: inherit
    }

    html {
        /* 1rem = 10px, 10/16 = 62,5% */
        font-size: 62,5%;

        /* 1rem = 9px, 9/16 = 56.25% */
        ${respondTo.tabland`
          font-size: 56.25%;
          `}

        /* 1 rem = 8px, 8/16 = 50% */
        ${respondTo.tabport`
          font-size: 50%;
          `}
          
        /* 1rem = 12, 12/16 = 75% */
        ${respondTo.bigdesktop`
          font-size: 75%;
          `}
    }
    
    body {
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
          "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
          sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    code {
        font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
          monospace;
    }

`

export default GlobalStyles;
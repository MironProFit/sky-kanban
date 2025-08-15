import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

body {
      margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    font-family: 'Roboto', Arial, Helvetica, sans-serif;
}

     * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

a,
&:visited {
    text-decoration: none;
    cursor: pointer;
}
`

import { Link as RouterLink } from 'react-router-dom'
import styled, { createGlobalStyle, css } from 'styled-components'
import { linkColor } from './Mexins.style'

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
export const StyledLink = styled(RouterLink)`    color: ${linkColor};

    &:visited {
        color: ${linkColor};
        text-decoration: none;
        cursor: pointer;
    }
`

import { Link as RouterLink } from 'react-router-dom'
import styled, { createGlobalStyle, css } from 'styled-components'

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
export const StyledLink = styled(RouterLink)`
    &:visited {
        color: inherit;
        text-decoration: none;
        cursor: pointer;
    }
`

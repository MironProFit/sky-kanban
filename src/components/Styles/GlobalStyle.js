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
export const StyledLink = styled(RouterLink)`
    color: ${linkColor};

    &:visited {
        color: ${linkColor};
        text-decoration: none;
        cursor: pointer;
    }
`
import { accentButtonColor, hoverColor, setButtonsColor, white, wrapperColor } from './Mexins.style'

export const Wrapper = styled.div`
    ${wrapperColor()}
    max-width: 100%;
    width: 100vw;
    min-height: 100vh;
    overflow: hidden;
    position: relative;
    top: 0;
    left: 0;
`
export const Container = styled.div`
    max-width: 1260px;
    width: 100%;
    margin: 0 auto;
    padding: 0 30px;

    @media screen and (max-width: 495px) {
        width: 100%;
        padding: 0 16px;
    }
`
// Button
export const PrimaryButton = styled.button`
    width: ${({ $width }) => $width || '100%'};
    height: 40px;
    border-radius: 4px;
    background-color: #565eef;
    color: #ffffff;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    line-height: 21px;
    font-weight: 500;
    letter-spacing: -0.14px;

    ${hoverColor}

    a {
        color: #ffffff;
        text-decoration: none;
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }
`
export const SecondaryButton = styled.button`
    width: 72px;
    height: 30px;
    background: transparent;
    ${setButtonsColor};
    border-radius: 4px;
    border: 1px solid ${({ $isDark }) => ($isDark ? '#FFFFFF' : '#565eef')};
    transition: 0.3s;

    &:hover {
        background: ${accentButtonColor};
        border: 1px solid ${({ $isDark }) => (!$isDark ? '#FFFFFF' : '#565eef')};
        color: ${white};
    }
`

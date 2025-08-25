import { Link as RouterLink } from 'react-router-dom'
import styled, { createGlobalStyle } from 'styled-components'
import { borderColor, hoverBorder, hoverCombination, linkColor, primaryHoverColor, textColor } from './Mexins.style'
import '../../components/Styles/Mexins.style'

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
export const LinkButton = styled.button`
    background: inherit;
    height: 20px;
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    line-height: 20px;
    border: none;
    ${textColor}
    transition: color 0.3s ease;
    cursor: pointer;

    ${hoverColor}

    &::after {
        content: '';
        display: block;
        width: 6px;
        height: 6px;
        border-radius: 1px;
        border-left: 1.9px solid ${borderColor};
        border-bottom: 1.9px solid ${borderColor};
        transform: ${({ $isOpen }) => ($isOpen ? 'rotate(135deg)' : 'rotate(-45deg)')};
        margin: ${({ $isOpen }) => ($isOpen ? '3' : '-3')}px 0 0 5px;
        padding: 0;
        transition: color 0.3s ease, transform 0.3s ease, margin 0.3s ease;
    }

    ${hoverBorder}
`

export const PrimaryButton = styled.button`
    width: ${({ $width }) => $width || '100%'};
    height: 30px;
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
    cursor: pointer;
    transition: 0.3s;

    /* margin-bottom: 10px; */
    padding: 0 14px;
    margin-right: 8px;
    /* ${hoverCombination} */
    /* a {
        color: #ffffff;
        text-decoration: none;
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    } */
    &:hover {
        background-color: ${primaryHoverColor};
        color: ${white};
    }
`
export const SecondaryButton = styled.button`
    width: ${({ $width }) => $width || 'auto'};
    height: 30px;
    margin-bottom: 10px;
    padding: 0 14px;
    margin-right: 8px;
    background: transparent;
    ${setButtonsColor};
    border-radius: 4px;
    border: 1px solid ${({ $isDark }) => ($isDark ? '#FFFFFF' : '#565eef')};
    transition: 0.3s;
    cursor: pointer;

    &:hover {
        background: ${accentButtonColor};
        border: 1px solid ${({ $isDark }) => (!$isDark ? '#FFFFFF' : '#565eef')};
        color: ${white};
    }
`

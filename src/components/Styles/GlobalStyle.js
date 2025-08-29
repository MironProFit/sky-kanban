import { Link as RouterLink } from 'react-router-dom'
import styled, { createGlobalStyle, css } from 'styled-components'
import { borderColor, hoverBorder, hoverCombination, linkColor, primaryHoverColor, reversePrimaryColor, secondaryColor, textColor } from './Mexins.style'
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
    @media (max-width: 600px) {
        display: ${({ $display }) => $display || 'flex'};
        width: 100%;
        margin: 0;
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
    @media (max-width: 600px) {
        margin: 0;
        width: 100%;
    }
`
export const TopicButton = styled.button`
    box-sizing: border-box;
    color: ${white};
    opacity: 0.4;
    width: ${({ $width }) => $width || 'auto'};
    height: 30px;
    padding: 0 14px;
    margin-right: 8px;
    ${({ $color }) => $color}
    border: 1px solid transparent;
    transition: 0.3s;
    cursor: pointer;
    border-radius: 24px;
    &.active {
        opacity: 1;
    }

    ${({ $isActive }) =>
        $isActive &&
        css`
            opacity: 1;
        `}

    ${({ $isDark }) =>
        $isDark &&
        css`
            &._orange {
                background-color: #ff6d00;
                /* color: #ffe4c2; */
            }
            &._green {
                background-color: #06b16e;
                /* color: #b4fdd1; */
            }
            &._purple {
                background-color: #9a48f1;
                /* color: #e9d4ff; */
            }
            &._gray {
                background: #94a6be;
                /* color: #ffffff; */
            }
        `}

    ${({ $isDark }) =>
        !$isDark &&
        css`
            &._orange {
                background-color: #ffe4c2;
                color: #ff6d00;
            }
            &._green {
                background-color: #b4fdd1;
                color: #06b16e;
            }
            &._purple {
                background-color: #e9d4ff;
                color: #9a48f1;
            }
            &._gray {
                background: #94a6be;
                color: #ffffff;
            }
        `}



    &:hover {
        opacity: 0.8;
    }
    &:active {
        opacity: 1;
    }
`

export const TextContainer = styled.p`
    margin-bottom: 20px;
    display: block;
    font-weight: 400;
    font-size: 14px;
    ${({ $secondaryColor }) => ($secondaryColor ? secondaryColor : reversePrimaryColor)}
`

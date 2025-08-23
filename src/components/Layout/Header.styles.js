import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { PrimaryButton } from '../Styles/GlobalStyle'
import { borderColor, hoverBorder, hoverColor, primaryBacground, secondaryColor, textColor } from '../Styles/Mexins.style'
primaryBacground
export const HeaderStyled = styled.header`
    ${primaryBacground}
    width: 100%;
    margin: 0 auto;
`
export const HeaderLogo = styled.div`
    width: 85px;
`
export const HeaderBlock = styled.div`
    height: 70px;
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: space-between;
    position: relative;
    top: 0;
    left: 0;
    padding: 0 10px;
    @media (max-width: 600px) {
        display: block;
    }
`
export const HeaderNav = styled.nav`
    max-width: 290px;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const HeaderNavBtn = styled(PrimaryButton)`
    width: 178px;
    height: 30px;
    margin-right: 20px;
    @media (max-width: 600px) {
        position: fixed;
        bottom: 30px;
        z-index: 9999;
        margin: 0; // Сброс маргина
        padding: 0; // Сброс паддинга
        width: 100%; // Сброс ширины
    }
`

export const HeaderModalBtn = styled.button`
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
//Modal

import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const HeaderStyled = styled.header`
    width: 100%;
    margin: 0 auto;
    background-color: ${({ isTheme }) => (isTheme ? '#20202C' : '#ffff')};
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
`
export const HeaderNav = styled.nav`
    max-width: 290px;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
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
    color: ${({ isTheme }) => (isTheme ? '#ffff' : '#565eef')};
    transition: color 0.3s ease;

    &:hover {
        color: #33399b;
    }

    &::after {
        content: '';
        display: block;
        width: 6px;
        height: 6px;
        border-radius: 1px;
        border-left: 1.9px solid ${({ isTheme }) => (isTheme ? '#ffff' : '#565eef')};
        border-bottom: 1.9px solid ${({ isTheme }) => (isTheme ? '#ffff' : '#565eef')};
        transform: ${({ modalOpen }) => (modalOpen ? 'rotate(135deg)' : 'rotate(-45deg)')};
        margin: ${({ modalOpen }) => (modalOpen ? '3' : '-3')}px 0 0 5px;
        padding: 0;
        transition: transform 0.3s ease, margin 0.3s ease;
    }
    &:hover::after {
        border-left-color: #33399b;
        border-bottom-color: #33399b;
    }
`

//Modal

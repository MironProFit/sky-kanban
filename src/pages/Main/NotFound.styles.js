import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { accentButtonColor } from '../../components/Styles/Mexins.style'

export const Wrap404 = styled.div`
    display: flex;
    flex-direction: column;
`

export const Title404 = styled.h1`
    font-size: 7rem;
    margin: 0 0 10px;
    font-weight: 800;
    color: ${accentButtonColor};
`

export const Subtitle = styled.h2`
    font-size: 2rem;
    margin-bottom: 24px;
    color: ${({ $isDark }) => ($isDark ? '#fff' : '#222')};
`

export const Img = styled.img`
    width: 350px;
    max-width: 90vw;
    margin-bottom: 32px;
`
export const MainLink = styled(Link)`
    margin-top: 18px;
    padding: 10px 34px;
    font-size: 18px;
    color: #fff;
    background: ${accentButtonColor};
    text-decoration: none;
    border-radius: 8px;
    cursor: pointer;
    font-weight: bold;
    transition: background 0.15s;
    &:hover {
        background: #b53c3c;
    }
`

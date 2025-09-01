import styled from 'styled-components'
import { mainBacground, scrollbarThumbColor, scrollbarTrackColor } from '../../components/Styles/Mexins.style'

export const MainContainer = styled.main`
    display: flex;
    width: 100%;
    ${mainBacground}
    @media (max-width: 600px) {
        display: ${({ $isModal }) => ($isModal ? 'none' : 'flex')};
    }
`
export const MainBlock = styled.div`
    @media (min-width: 601px) {
        overflow-x: scroll;
        width: 100%;
        margin: 0 auto;
        padding: 25px 0 49px;

        &::-webkit-scrollbar-track {
            border-radius: 10px;
        }
    }
    @media (max-width: 600px) {
        width: 100%;
        margin: 0 auto;
        padding: 30px 0 64px;
        display: flex;
        flex-direction: row;
    }
    &::-webkit-scrollbar {
        width: 12px;
        border-radius: 10px;
    }

    &::-webkit-scrollbar-track {
        background: ${scrollbarTrackColor};
        border-radius: 10px;
        &:hover {
            background: ${scrollbarTrackColor};
        }
    }

    &::-webkit-scrollbar-thumb {
        background-color: ${scrollbarThumbColor};
        border-radius: 10px;
        transition: 1s ease; /* Плавный переход для цвета */
    }
`

export const MainContent = styled.div`
    display: flex;
    flex-direction: row;

    @media (max-width: 600px) {
        width: 100%;
        flex-direction: column;
        &:last-child {
            margin-bottom: 30px;
        }
    }
`

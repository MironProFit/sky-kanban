import styled from 'styled-components'
import { wrapperColor } from './Mexins.style'

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
    width: 100%; // Переносим это сюда, так как все кнопки должны быть 100% ширины
    height: 40px; // Делаем высоту стандартной
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

    &:hover {
        background-color: #33399b;
    }

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

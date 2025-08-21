import styled from 'styled-components'
import { hoverBackground, inputColor, linkColor, mainBacground, primaryBacground, primaryColor, primaryHoverColor, reversePrimaryColor } from '../Styles/Mexins.style'
import { Link } from 'react-router-dom'

export const CardsContainer = styled.div`
    width: 100%;
    display: block;
    position: relative;
`

export const CardItem = styled.div`
    padding: 5px;
    animation-name: card-animation;
    animation-duration: 500ms;
    animation-timing-function: linear;
`

export const CardWrapper = styled.div`
    width: 220px;
    height: 130px;
    ${primaryBacground}
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: stretch;
    padding: 15px 13px 19px;
`

export const CardGroup = styled.div`
    width: 100%;
    height: 20px;
    margin-bottom: 12px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const Theme = styled.div`
    display: flex;
    align-items: center;
    width: auto;
    height: 20px;
    padding: 5px 14px;
    border-radius: 18px;
    &.dark {
        &._orange {
            background-color: #ff6d00;
            color: #ffe4c2;
        }
        &._green {
            background-color: #06b16e;
            color: #b4fdd1;
        }
        &._purple {
            background-color: #9a48f1;
            color: #e9d4ff;
        }
        &._gray {
            background: #94a6be;
            color: #ffffff;
        }
    }

    &.light {
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
    }
`

export const ThemeText = styled.p`
    padding: 5px 10px 5px 10px;

    border-radius: 18px;
    font-size: 10px;
    font-weight: 600;
    line-height: 10px;
`

export const CardTitle = styled.h3`
    font-size: 14px;
    font-weight: 500;
    line-height: 18px;
    ${reversePrimaryColor}
    margin-bottom: 10px;
`

export const CardContent = styled.div`
    height: 64px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
`

export const CardDate = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
`

export const CardDateText = styled.p`
    margin-left: 6px;
    font-size: 10px;
    line-height: 13px;
    color: #94a6be;
    letter-spacing: 0.2px;
`

export const CardLink = styled(Link)`
    display: flex;
    position: relative; // добавим абсолютное позиционирование для точек
    &:hover > div {
        opacity: 1; // подсвечиваем только точки
    }
`

export const DotContainer = styled.div`
    display: flex;
`
export const Dot = styled.div`
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background-color: ${linkColor};
    opacity: 0.5;
    transition: opacity 0.3s;
    margin-left: 2px;

    ${CardLink}:hover & {
        opacity: 1;
    }
`

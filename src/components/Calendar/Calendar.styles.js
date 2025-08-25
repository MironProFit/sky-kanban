import styled, { css } from 'styled-components'
import { accentColor, textColor, mainBacground, hoverBackground, hoverColor } from '../Styles/Mexins.style'

export const Calendar = styled.div`
    width: 182px;
    margin-bottom: 20px;

    ${mainBacground}
`

export const CalendarTitle = styled.div`
    margin-bottom: 14px;
    padding: 0 7px;
    ${textColor}
`

export const CalendarP = styled.p`
    color: ${accentColor};
    font-size: 10px;
    line-height: 1;

    & span {
        color: #000000;
    }
`

export const CalendarBlock = styled.div`
    display: block;
`

export const CalendarMonth = styled.div`
    color: ${accentColor};
    font-size: 14px;
    line-height: 25px;
    font-weight: 600;
    ${textColor}
`

export const CalendarContent = styled.div`
    margin-bottom: 12px;
`

export const CalendarDaysNames = styled.div`
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: space-between;
    margin: 7px 0;
    padding: 0 7px;
`

export const CalendarDayName = styled.div`
    color: ${accentColor};
    font-size: 10px;
    font-weight: 500;
    line-height: normal;
    letter-spacing: -0.2px;
    ${textColor}
`

export const CalendarCells = styled.div`
    width: 182px;
    height: 126px;
    display: flex;
    flex-wrap: wrap;
`

export const CalendarCell = styled.div`
    width: 22px;
    height: 22px;
    margin: 2px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${accentColor};
    font-size: 10px;
    line-height: 1;
    letter-spacing: -0.2px;
    cursor: pointer;
    transition: background 0.2s;

    ${({ otherMonth }) =>
        otherMonth &&
        css`
            opacity: 0;
            pointer-events: none;
        `};
    ${({ cellDay }) =>
        cellDay &&
        css`
            ${hoverBackground}
            ${hoverColor}
        `};
    ${({ activeDay }) =>
        activeDay &&
        css`
            background-color: ${accentColor};
            color: #ffffff;
        `};
    ${({ current }) =>
        current &&
        css`
            font-weight: 700;
        `};
`

export const CalendarNav = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 14px;
    padding: 0 7px;
`

export const CalendarPeriod = styled.div`
    padding: 0 7px;
`

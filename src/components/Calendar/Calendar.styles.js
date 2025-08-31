import styled, { css } from 'styled-components'
import { accentColor, accentPrimaryColor, hoverBackground, hoverColor, selectedDate } from '../Styles/Mexins.style'

export const Calendar = styled.div`
    width: 182px;
    margin-top: 14px;

    @media (max-width: 600px) {
        width: 100%;
        margin: 0;
    }
`

export const CalendarTitle = styled.div`
    margin-bottom: 7px;
    display: flex;
    justify-content: space-between;
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
`

export const CalendarBtnWrap = styled.div`
    display: flex;
`
export const CalendarBtnGroup = styled.div`
    display: flex;
    align-items: center;
`
export const CalendarAndDateContainer = styled.div`
    display: block;
    margin-left: 20px;
    margin-bottom: 20px;
`

export const CalendarBtn = styled.button`
    background-color: transparent;
    display: inline-block;
    width: 10px;
    height: 10px;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    border: none;
    cursor: pointer;
    background-image: ${(props) => (props.isLeft ? "url('../../../public/prev.svg')" : "url('../../../public/next.svg')")};

    margin-right: ${(props) => (props.isLeft ? '10px' : '0')};
    margin-left: ${(props) => (props.isLeft ? '0' : '10px')};
`

export const CalendarContent = styled.div`



    margin-bottom: 12px;
    margin-left: -7px;
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
`

export const CalendarCells = styled.div`
    width: 182px;
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

    transition: background 0.2s;
    cursor: pointer;

    ${({ $past }) =>
        $past &&
        css`
            cursor: default;
            color: #47464c;
        `}

    ${({ $isEditMode }) =>
        !$isEditMode &&
        css`
            cursor: default;
        `}

    ${({ otherMonth }) =>
        otherMonth &&
        css`
            opacity: 0;
            pointer-events: none;
        `};
    ${({ isToday }) =>
        isToday &&
        css`
            background-color: ${accentColor};
            color: black;
        `};
    ${({ cellDay, $isEditMode, $past }) =>
        cellDay &&
        $isEditMode &&
        !$past &&
        css`
            ${hoverBackground} : none;
            ${hoverColor};
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
    ${({ selected }) =>
        selected &&
        css`
            ${selectedDate}
        `}
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

